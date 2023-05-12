import facilityService from "../services/facilityService.mjs";
import logger from "../utils/logger.js";

export const getShifts = async (req, res) => {
  try {
    const startTime = Date.now();
    const { facility_id } = req.params;
    const { start_date, end_date, page, page_size } = req.query;
    const results = await facilityService.getActiveFacilities(
      start_date,
      end_date,
      facility_id,
      page,
      page_size
    );
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    logger.info(`Elapsed time : ${elapsedTime} ms`);

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
