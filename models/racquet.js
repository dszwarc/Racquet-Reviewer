const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        content: String,
        rating: 
        {
            type: Number,
            min: 1,
            max: 10,
            default: 10
        },
        userId: 
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
        },
        username: String,
        userAvatar: String
    },
    {
        timestamps: true
    }
)

const racquetSchema = new mongoose.Schema(
    {
        model: String,
        make: 
        {
            type: String,
            enum: ['Wilson', 'Head', 'Yonex', 'Babolat', 'Prince']
        },
        headSize: 
        {
            type: Number,
            min: 80,
            max: 110
        },
        mains: Number,
        crosses: Number,
        stiffness: Number,
        power: String,
        reviews: [reviewSchema]
    }
)

module.exports = mongoose.model('Racquet', racquetSchema);