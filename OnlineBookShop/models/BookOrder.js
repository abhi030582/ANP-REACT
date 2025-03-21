import sequelize from '../configs/db.js';
import { DataTypes } from 'sequelize';

const BookOrder = sequelize.define("BookOrder", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  books: {
    type: DataTypes.JSON,
    allowNull: false, 
  },
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Pending", "Completed", "Cancelled"),
    defaultValue: "Pending",
  },
});

export default BookOrder;
