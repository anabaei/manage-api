// Import Sequelize ORM
import { Op } from "sequelize";
import { sequelize } from "../models/index.js";
const { Shift, Facility } = sequelize.models;
import { getShiftsByDate } from '../helper/_shiftsByDate.js';

// Define facilityService object with method(s)
const facilityService = {
  async getActiveFacilities(
    startDate,
    endDate,
    id,
    page = 1,
    pageSize = 1
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
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
    return getShiftsByDate(activeFacilities);
  },
};

// Export facilityService object
export default facilityService;
