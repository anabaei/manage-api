import Sequelize from "sequelize";
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

// Define shiftService object with method(s)
const shiftService = {
  async getAllShiftsNotFromFacility(
    startDate,
    endDate,
    id,
    page = 1,
    pageSize = 1
  ) {
    const activeFacilities = await Facility.findAll({
      where: {
        is_active: true,
        id: {
          [Sequelize.Op.ne]: id,
        },
      },
      attributes: [
        // "id",
        "name",
        "is_active",
      ],
      include: {
        model: Shift,
        attributes: ["id", "start", "end", "is_deleted", "profession"],
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
      order: [
        [Shift, "end", "ASC"],
        [Shift, "start", "ASC"],
      ],
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
    return getShiftsByDate(activeFacilities);
  },

  async getAvailableShifts(startDate, endDate, pageSize = 1, page = 1) {
    const activeFacilities = await Facility.findAll({
      where: {
        is_active: true,
      },
      attributes: [
        // "id",
        "name",
        "is_active",
      ],
      include: {
        model: Shift,
        attributes: ["id", "start", "end", "is_deleted", "profession"],
        where: {
          end: {
            [Sequelize.Op.ne]: startDate,
          },
          start: {
            [Sequelize.Op.ne]: endDate,
          },
        },
        required: true,
      },
      order: [
        [Shift, "end", "ASC"],
        [Shift, "start", "ASC"],
      ],
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
    // return activeFacilities
    return getShiftsByDate(activeFacilities);
  },
};

// Export shiftService object
export default shiftService;
