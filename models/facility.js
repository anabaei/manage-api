import Sequelize from "sequelize";

const Facility = (sequelize) => {
  const model = sequelize.define(
    "Facility",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Facility",
      timestamps: true,
    }
  );

  model.associate = () => {
    const Shift = sequelize.models.Shift;
    model.hasMany(Shift, { foreignKey: "facility_id" });
  };

  return model;
};

export default Facility;
