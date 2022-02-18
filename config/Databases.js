import { Sequelize } from "sequelize";

const dbb = new Sequelize('mern_db', 'root', '', {
  host: "localhost",
  dialect: "mysql"
});

export default dbb;