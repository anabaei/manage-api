import Sequelize from "sequelize";

const Document = (sequelize) => {
  const model = sequelize.define(
    "Document",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_required: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "Document",
    },
    {
      timestamps: false,
    }
  );
  return model;
};

export default Document;
