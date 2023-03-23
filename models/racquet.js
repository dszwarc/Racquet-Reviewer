const mongoose = require('mongoose');

const racquetSchema = new mongoose.Schema(
    {
        model: String,
        make: 
        {
            type: String,
            enum: ['Wilson', 'Head', 'Yonex', 'Babolat', '']
        },
        headSize: 
        {
            type: Number,
            min: 80,
            max: 110
        }
        
    }
)

module.exports = mongoose.model('Racquet', racquetSchema);