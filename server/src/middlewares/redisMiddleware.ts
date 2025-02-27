import {createClient} from 'redis'; // Correct import for Redis v4.x
import {InternalServerError} from '#/utils/errors';
import {logger} from '#/utils/logger';
import {Request, Response, NextFunction} from 'express'; // Import types from express

let redisClient: ReturnType<typeof createClient> | null = null;

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

// Define custom types for the methods added to the request object
interface CustomRequest extends Request {
  readData: (dataName: string) => Promise<any>;
  writeData: (dataName: string, data: any) => void;
  deleteData: (dataName: string) => void;
}

export default () => {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      // Ensure Redis is initialized before handling the request
      await initializeRedis();

      // Methods to interact with Redis
      req.readData = async function (dataName: string) {
        const data = await redisClient!.get(dataName);
        return JSON.parse(data || 'null');
      };

      req.writeData = function (dataName: string, data: any) {
        redisClient!.setEx(dataName, parseInt(process.env.RS_EXP || '3600'), JSON.stringify(data));
      };

      req.deleteData = function (dataName: string) {
        redisClient!.del(dataName);
      };

      return next();
    } catch (err) {
      return next(new InternalServerError(500, (err as Error).message));
    }
  };
};
