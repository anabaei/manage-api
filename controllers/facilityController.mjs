import facilityService from "../services/facilityService.mjs";

export const getShifts = async (req, res) => {
  try {
    const { facility_id } = req.params;
    const { start, end } = req.query;
    const availableShifts = await facilityService.getActiveFacilities(
      start,
      end,
      facility_id
    );
    res.json(availableShifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
