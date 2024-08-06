import express from 'express';
import { generateImage } from '../controllers/GenerateAlImage.js';

const router = express.Router();

router.post('/', generateImage);

export default router;
