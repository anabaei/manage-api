

import Sequelize from "sequelize";

const DocumentWorker = (sequelize) => {
const model = sequelize.define(
    "DocumentWorker",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
 
    },
    {
      tableName: "DocumentWorker",
    },
    {
      timestamps: false, 
    }
  );
return model
}
export default DocumentWorker