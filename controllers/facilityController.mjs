import facilityService from "../services/facilityService.mjs";

export const getShifts = async (req, res) => {
  try {
    const { facility_id } = req.params;
    const { start_date, end_date, page, page_size } = req.query;
    const availableShifts = await facilityService.getActiveFacilities(
      start_date,
      end_date,
      facility_id,
      page,
      page_size
    );
    res.json(availableShifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
