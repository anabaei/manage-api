import shiftService  from '../services/shiftService.mjs';

// GET all shifts
export const getAvailableShiftsNotFromFacility = async (req, res) => {
  try {
    const { start_date, end_date, facilityId, page, page_size } = req.query 
     const shifts = await shiftService.getAllShiftsNotFromFacility(start_date, end_date, facilityId)
   res.json(shifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllShifts = async (req, res) => {

  try {
    const { start_date, end_date, page, page_size} = req.query 
     const shifts = await shiftService.getAvailableShifts(start_date, end_date, page, page_size)
   res.json(shifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};






