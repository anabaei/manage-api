import express from 'express';
import { getAllShifts,  getAvailableShiftsNotFromFacility } from '../controllers/shiftController.mjs';

const router = express.Router();

router.get('/', getAllShifts);
router.get('/available', getAvailableShiftsNotFromFacility)

export default router

