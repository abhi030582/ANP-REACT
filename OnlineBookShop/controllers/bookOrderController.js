
import BookOrder from "../models/BookOrder.js";
export const createOrder = async (req, res) => {
    try {
      const { customerName, email, books } = req.body;
      if (!customerName || !email || !books || books.length === 0) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const totalAmount = books.reduce((sum, book) => sum + book.price, 0);
  
      const order = await BookOrder.create({
        customerName,
        email,
        books,
        totalAmount,
      });
  
      res.status(201).json({ message: "Order placed successfully", order });
    } catch (error) {
      res.status(500).json({ message: "Error placing order", error });
    }
  };
  
  export const getAllOrders = async (req, res) => {
    try {
      const orders = await BookOrder.findAll();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: "Error fetching orders", error });
    }
  };
  
  export const getOrderById = async (req, res) => {
    try {
      const order = await BookOrder.findByPk(req.params.id);
      if (!order) return res.status(404).json({ message: "Order not found" });
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: "Error fetching order", error });
    }
  };
  
  export const updateOrderStatus = async (req, res) => {
    try {
      const { status } = req.body;
      console.log(status);
      const order = await BookOrder.findByPk(req.params.id);
      console.log(order.status);
      if (!order) return res.status(404).json({ message: "Order not found" });
  
      order.status = status;
      await order.save();
      console.log(order.status);
  
      res.status(200).json({ message: "Order updated", order });
    } catch (error) {
      res.status(500).json({ message: "Error updating order", error });
    }
  };
  
  export const deleteOrder = async (req, res) => {
    try {
      const order = await BookOrder.findByPk(req.params.id);
      if (!order) return res.status(404).json({ message: "Order not found" });
  
      await order.destroy();
      res.status(200).json({ message: "Order deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting order", error });
    }
  };
  