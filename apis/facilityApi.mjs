import express from 'express';
import { getShifts } from '../controllers/facilityController.mjs';

const router = express.Router();

router.get('/:facility_id/shifts', getShifts);

export default router

