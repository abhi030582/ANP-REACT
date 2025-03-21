import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors';

dotenv.config({
  path:'./configs/config.env'
});
app.use(cors());
const db_uri = process.env.DB_LOCAL_URI;
// Connecting to database
mongoose.connect(db_uri)
  .then(() => {
      console.log('MongoDB connected');
  })
  .catch(err => {
      console.error('MongoDB connection error:', err);
  });

app.use(express.json());

import bookRoutes from "./routes/BookRouter1.js";
import reviewRoutes from "./routes/reviewRouter.js";
app.use("/api/v1", bookRoutes);
app.use("/api/v1", reviewRoutes);
app.use("/api/v1", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `${process.env.NODE_SERVER} started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
