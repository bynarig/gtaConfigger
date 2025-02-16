import express from 'express'
import { logger } from "./utils/logger.js";
import { redisGet, redisPing, redisSet } from "./utils/redis.js";
import router from "./router/router.js";
const app = express()
const port = 3000
import cors from 'cors'
app.use(cors())

redisPing();
app.use(express.json());
app.use("/", router)



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
  logger.info(`Server is on port: ${port}`)
})