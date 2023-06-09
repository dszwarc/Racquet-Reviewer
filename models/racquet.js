const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        groundRating: 
        {
            type: Number,
            min: 1,
            max: 5,
            default: 5
        },
        volleyRating: 
        {
            type: Number,
            min: 1,
            max: 5,
            default: 5
        },
        serveRating: 
        {
            type: Number,
            min: 1,
            max: 5,
            default: 5
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
            enum: [
            'Wilson', 'Head', 'Yonex', 
            'Babolat', 'Prince', 'Gamma', 
            'Diadem', 'Dunlop', 'Technifibre',
            'Lacoste', 'ProKennex', 'Volkl'
        ]
        },
        headSize: 
        {
            type: Number,
            min: 80,
            max: 110
        },
        mains: Number,
        crosses: Number,
        power: {
            type: String,
            enum: ['Low', 'Med', 'High']
        },
        weight: Number,
        shortDescription: String,
        longDescription: String,
        releaseYear: Number,
        reviews: [reviewSchema],
        img: String
    }
)

module.exports = mongoose.model('Racquet', racquetSchema);