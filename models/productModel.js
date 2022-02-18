import { Sequelize } from "sequelize";
import dbb from "../config/Databases.js";

const { DataTypes } = Sequelize;

const Product = dbb.define('products', {
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.STRING
  },
  mengajar: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
});

export default Product;