import mongoose from 'mongoose';
import User from './UserModel.js'

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
         ref: User,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
