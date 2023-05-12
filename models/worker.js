import Sequelize from "sequelize";
const Worker = (sequelize) => {
  const model = sequelize.define(
    "Worker",
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
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "Worker",
    },
    {
      timestamps: false,
    }
  );

  return model;
};

export default Worker;
