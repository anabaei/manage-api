// Import Sequelize ORM
import { Op } from "sequelize";
import { sequelize } from "../models/index.js";
const { Shift, Facility } = sequelize.models;

function getShiftsByDate(activeFacilities) {
  const shiftsByDate = activeFacilities.reduce((result, facility) => {
    facility.Shifts.forEach((shift) => {
      const date = shift.start.toISOString().slice(0, 10);
      if (!result[date]) {
        result[date] = [];
      }
      result[date].push(shift);
    });
    return result;
  }, {});

  return shiftsByDate;
}

// Define facilityService object with method(s)
const facilityService = {
  async getShifts() {
    const shift = await Shift.findOne({
      where: { id: 1 },
      attributes: ["id", "facility_id"],
    });
    const facility = await shift.getFacility({ attributes: ["id"] });
    return shift;
  },

  async getActiveFacilities(
    startDate = "2022-01-07T12:00:00.201Z",
    endDate = "2023-04-07T17:00:00.201Z",
    id
  ) {
    const activeFacilities = await Facility.findAll({
      attributes: ["id"],
      where: {
        id,
      },
      include: [
        {
          model: Shift,
          attributes: ["start", "end"],
          where: {
            end: {
              [Op.between]: [startDate, endDate],
            },
            start: {
              [Op.between]: [startDate, endDate],
            },
          },
          required: true,
        },
      ],
    });
    return getShiftsByDate(activeFacilities);
  },
};

// Export facilityService object
export default facilityService;
