import Redis from "ioredis";
import { logger } from "./logger.js";


const redis = new Redis();

export function redisPing(){
	redis.ping((err, res) => {
    if (err) {
		logger.error(err + "Redis is not available")
    } else {
      logger.info('Redis is up and running');
    }
  });
}

export function redisSet (key, data) {
	redis.set(key, data, (err, reply) => {
		if (err) {
			logger.error(err);
		} else {
			logger.info(`Data stored in Redis with key: ${key}`);
		}
	});
};

export function redisGet(key) {
  return new Promise((resolve, reject) => {
    redis.get(key, (err, reply) => {
      if (err) {
        reject(err);
      } else {
        resolve(reply);
      }
    });
  });
}
