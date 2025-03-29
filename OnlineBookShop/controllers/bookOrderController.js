
import BookOrder from "../models/BookOrder.js";
export const createOrder = async (req, res) => {
  try {
    const { customerName, email, books } = req.body;
    console.log(req.body);

    // Validate required fields
    if (!customerName || !email || !Array.isArray(books) || books.length === 0) {
      return res.status(400).json({ message: "All fields are required and books must be a non-empty array." });
    }

    // Validate each book structure
    for (const book of books) {
      if (!book.id || !book.name || typeof book.price !== "number" || book.price < 0) {
        return res.status(400).json({ message: "Each book must have a valid ID, name, and a non-negative price." });
      }
    }

    // Calculate total amount
    const totalAmount = books.reduce((sum, book) => sum + (book.price || 0), 0);

    if (isNaN(totalAmount) || totalAmount <= 0) {
      return res.status(400).json({ message: "Total amount calculation failed. Please check book prices." });
    }

    // Create order in DB
    const order = await BookOrder.create({
      customerName,
      email,
      books,
      totalAmount,
    });

    return res.status(201).json({ message: "Order placed successfully", order });

  } catch (error) {
    console.error("Error placing order:", error.message);
    return res.status(500).json({ message: "Error placing order", error: error.message });
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
  