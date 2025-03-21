// controllers/reviewController.js
import Review from '../models/ReviewModel.js';

export const createReview = async (req, res) => {
    try {
        const { user, rating, comment } = req.body;
        console.log(req.body);
        const review = new Review({ user, rating, comment });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user', 'name');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('user', 'name');
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.json({ message: 'Review deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
