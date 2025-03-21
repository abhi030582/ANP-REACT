import express from "express";
import cors from "cors";
import sequelize from "./configs/db.js";
import bookOrderRoutes from "./routes/bookOrderRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bookOrderRoutes);
//app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
