import express from "express";
import { logger } from "./utils/logger.js";
import router from "./router/router.js";
import cors from "cors";
import redis from '#middlewares/redisMiddleware.js'
import {DB, connect} from "#utils/mongooseConnect.js";
import cookieParser from "cookie-parser"; // DB connecting
const { models } = DB;
const app = express();
const port = 3000;


app.use((req, res, next) => {
  // now in every request would be our models, we don't need to import everywhere
  req.models = models;
  next();
});
connect();
app.use(cors());
app.use(redis());
app.use(express.json());
app.use("/", router);
app.use(cookieParser());
app.use(express.json());
//
// app.get('/optimise', (req, res) => {
//   const data = req.body;
//   // process the data
//   logger.info("/optimise path got this data: " + JSON.stringify(data))
//   gtaOptimiser(data);
//   res.send(data)
// });
//
// app.get('/redis-add', (req, res) => {
//   const data = req.body;
//   // process the data
//   logger.info("/redis-add path got this data: " + JSON.stringify(data))
//   redisSet(data.user.token, JSON.stringify(data.settings));
//   res.send(data)
// });
//
// app.get('/redis-get', (req, res) => {
//   const data = req.body;
//   // process the data
//   logger.info("/redis-add path got this data: " + JSON.stringify(data))
//   redisGet(data.user.token)
//   redisGet(data.user.token)
//   .then(data => res.send(data))
//   .catch(err => res.err(err));
// });

app.listen(port, () => {
	logger.info(`Server is on port: ${port}`);
});