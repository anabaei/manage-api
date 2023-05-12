import Sequelize from "sequelize";

const FacilityRequirement = (sequelize) => {
  const model = sequelize.define(
    "FacilityRequirement",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: "FacilityRequirement",
    },
    {
      timestamps: false,
    }
  );
  return model;
};

export default FacilityRequirement;
