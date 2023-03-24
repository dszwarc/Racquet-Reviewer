const mongoose = require('mongoose');

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
    }
)

module.exports = mongoose.model('Racquet', racquetSchema);