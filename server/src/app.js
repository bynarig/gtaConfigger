import express from "express";
import { logger } from "./utils/logger.js";
import router from "./router/router.js";
import cors from "cors";
import redis from '#middlewares/redisMiddleware.js';
import { DB, connect } from "#utils/mongooseConnect.js";
import cookieParser from "cookie-parser"; // DB connecting
const { models } = DB;
const app = express();
const port = 8905;

app.use((req, res, next) => {
  // now in every request there will be models, no need to import everywhere
  req.models = models;
  next();
});

connect();
app.use(cors());
app.use(redis());
app.use(express.json());
app.use(cookieParser());
app.use("/", router);

// Add /hello endpoint for the test
app.get('/hello', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  logger.info(`Server is on port: ${port}`);
});

export default app; // Export app to use in tests
