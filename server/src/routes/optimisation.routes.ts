import {Router} from 'express';
import OptimiserController from '#controllers/optimisation.controller';

const router = Router();

router.post('/optimise-settings', OptimiserController.optimiseSettings);

export default router;
