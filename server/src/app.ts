import express, {json} from 'express';
import {logger} from '#/utils/logger';
import router from '#/routes/router';
import cors from 'cors';
// import redis from '#/middlewares/redisMiddleware';
import {connect} from '#/utils/mongooseConnect';
import cookieParser from 'cookie-parser'; // DB connecting
// const { models } = DB;
const app = express();
const port = 8905;

// type Models = any;
// // Extend the Request type to include the `models` property
// interface CustomRequest extends Request {
//   models: Models;
//
//
// // Example middleware
// app.use((req, res, next) => {
//   // Now you can safely assign `models` to `req`
//   req.models = models; // `models` should be defined somewhere in your code
//   next();
// });

connect();
app.use(cors());
// app.use(redis());
app.use(json());
app.use(cookieParser());
app.use('/', router);

// Add /hello endpoint for the test
app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  logger.info(`Server is on port: ${port}`);
});

export default app; // Export app to use in tests
