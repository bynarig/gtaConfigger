import mongoose from 'mongoose';
import dotenv from 'dotenv'; // connecting dotenv
dotenv.config();

import models from '#/models/index';
import {logger} from '#/utils/logger.js';
import * as process from 'node:process';

export async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {});
    logger.info('DB connected');
    return true;
  } catch (err) {
    logger.info(`DB didn't connect ${err}`);
    return false;
  }
}
export const DB = {
  models,
};
