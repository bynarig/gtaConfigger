import express from 'express';
import OptimiserController from "../controllers/optimisation.controller.js";

const router = express.Router();

router.post('/optimise-settings', OptimiserController.optimiseSettings)

export default router;