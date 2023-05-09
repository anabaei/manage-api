
import Sequelize from "sequelize";
const Shift = (sequelize) => {
  const model = sequelize.define(
  "Shift",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    start: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    end: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    profession: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    is_deleted: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    facility_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    worker_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    facility_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Facility',
        key: 'id',
      },
    },
    worker_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Worker',
        key: 'id',
      },
    },
  },
  {
    tableName: "Shift", // this will use shift instead of shifts
  },
  {
    timestamps: false, 
  }
);

return model;
};

export default Shift;
