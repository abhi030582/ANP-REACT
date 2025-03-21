// routes/reviewRoutes.js
import express from 'express';
import { createReview, getReviews, getReviewById, deleteReview } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/reviews', createReview);
router.get('/reviews', getReviews);
router.get('/reviews:id', getReviewById);
router.delete('/reviews:id', deleteReview);

export default router;
