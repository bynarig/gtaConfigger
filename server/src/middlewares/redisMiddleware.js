import Redis from 'redis';
import { InternalServerError } from '#utils/errors.js';

let redisClient;

// Function to initialize Redis client connection
async function initializeRedis() {
  if (!redisClient) {
    redisClient = Redis.createClient();
    // If running in Docker, use the Docker URL
    // redisClient = Redis.createClient({ url: 'redis://redis:6379' });

    redisClient.on('error', (err) => console.log('Redis Client Error', err));

    try {
      await redisClient.connect();
    } catch (error) {
      console.error('Failed to connect to Redis', error);
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
