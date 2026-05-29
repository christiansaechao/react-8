import express from 'express'
import { logInController } from '../controllers/logInController'

const router = express();

router.post("/", logInController);

export default router;