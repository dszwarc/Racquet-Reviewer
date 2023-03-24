const UserModel = require('../models/user')
const RacquetModel = require('../models/racquet')

async function index(req,res){
    const racquets = await RacquetModel.find({})
    res.render('racquets/index',{
        racquets
    })
}

function newRacquet(req, res){
    res.render('racquets/new')
}

async function create(req, res){
    await RacquetModel.create(req.body);
    res.redirect('/racquets')
}

module.exports = {
    index,
    new: newRacquet,
    create
}