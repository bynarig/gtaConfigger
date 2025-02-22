import { createClient } from 'redis'; // Correct import for Redis v4.x
import { InternalServerError } from '#utils/errors.js';
import { logger } from "#utils/logger.js";

let redisClient;

// Function to initialize Redis client connection
async function initializeRedis() {
  if (!redisClient) {
    redisClient = createClient(); // Use createClient directly
    // If running in Docker, use the Docker URL
    // redisClient = createClient({ url: 'redis://redis:6379' });

    redisClient.on('error', (err) => logger.info('Redis Client Error', err));

    try {
      await redisClient.connect();
    } catch (error) {
      logger.error('Failed to connect to Redis', error);
      throw new InternalServerError(500, 'Failed to connect to Redis');
    }
  }
}

export default () => {
  return async (req, res, next) => {
    try {
      // Ensure Redis is initialized before handling the request
      await initializeRedis();

      // Methods to interact with Redis
      req.readData = async function (dataName) {
        return JSON.parse(await redisClient.get(dataName));
      };

      req.writeData = function (dataName, data) {
        redisClient.setEx(dataName, process.env.RS_EXP, JSON.stringify(data));
      };

      req.deleteData = function (dataName) {
        redisClient.del(dataName);
      };

      return next();
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  };
};