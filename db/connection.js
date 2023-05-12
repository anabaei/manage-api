
import Sequelize from 'sequelize';

let connection = null;
// if(process.env.LOCAL){
	connection= new Sequelize(`postgres://postgres:postgres@localhost:5432/postgres`, {
		dialect: 'postgres', 
		logging: false 
		})
connection.sync({});

// connection.sync().then( ()=> "tables created successfully")

export default connection;