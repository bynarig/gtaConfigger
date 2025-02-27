import express from 'express';
import OptimisationRoutes from './optimisation.routes';
const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello World!');
});

router.use('/optimisation', OptimisationRoutes);

// You can add more routers here...

export default router;
