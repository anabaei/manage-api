import shiftService from "../services/shiftService.mjs";
import logger from "../utils/logger.js";

// GET all shifts
export const getAvailableShiftsNotFromFacility = async (req, res) => {
  try {
    const startTime = Date.now();
    const { start_date, end_date, facilityId, page, page_size } = req.query;
    const shifts = await shiftService.getAllShiftsNotFromFacility(
      start_date,
      end_date,
      facilityId,
      page,
      page_size
    );
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    logger.info(`Elapsed time : ${elapsedTime} ms`);

    res.json(shifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllShifts = async (req, res) => {
  try {
    const startTime = Date.now();
    const { start_date, end_date, page, page_size } = req.query;
    const shifts = await shiftService.getAvailableShifts(
      start_date,
      end_date,
      page,
      page_size,
      page,
      page_size
    );
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    logger.info(`Elapsed time : ${elapsedTime} ms`);
    res.json(shifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
