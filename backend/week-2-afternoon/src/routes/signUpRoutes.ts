import express from 'express'
import { signUpController } from '../controllers/signUpController'

const router = express();

router.post("/", signUpController);

export default router;