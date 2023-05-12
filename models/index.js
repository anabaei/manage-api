
import Sequelize from 'sequelize';
import ShiftModel from './shift.js'
import FacilityModel from './facility.js'
import FacilityRequirementModel from './facilityRequirement.js'
import DocumentModel from './document.js'
import WorkerModel from './worker.js'
import DocumentWorkerModel from './documentWorker.js'


const sequelize = new Sequelize(`postgres://postgres:postgres@localhost:5432/postgres`, {
    dialect: 'postgres', 
    logging: false 
    })


const Shift  = ShiftModel(sequelize, Sequelize);
const Facility  = FacilityModel(sequelize, Sequelize);
const FacilityRequirement = FacilityRequirementModel(sequelize, Sequelize);
const Document = DocumentModel(sequelize, Sequelize);
const DocumentWorker = DocumentWorkerModel(sequelize, Sequelize);
const Worker = WorkerModel(sequelize, Sequelize);


Facility.hasMany(Shift, {foreignKey: 'facility_id'});
Facility.hasMany(FacilityRequirement, {foreignKey: 'facility_id'})

Document.hasMany(FacilityRequirement, {foreignKey: 'document_id'})
Document.hasMany(DocumentWorker, {foreignKey: 'document_id'})

Worker.hasMany(DocumentWorker, {foreignKey: 'worker_id'})
Worker.hasMany(Shift, {foreignKey: 'worker_id'})


// export the models and sequelize instance
export { sequelize };
