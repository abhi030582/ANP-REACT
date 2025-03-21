import express from "express";
import { createOrder, getAllOrders, getOrderById, updateOrderStatus, deleteOrder } from "../controllers/bookOrderController.js";

const router = express.Router();

router.post("/order", createOrder);
router.get("/orders", getAllOrders);
router.get("/order/:id", getOrderById);
router.put("/order/:id", updateOrderStatus);
router.delete("/order/:id", deleteOrder);

export default router;
