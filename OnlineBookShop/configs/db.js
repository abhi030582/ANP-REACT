import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bookstore", "root", "Anudip@123", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB connection error:", err));

export default sequelize;
