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

async function show(req, res){
    const racquet = await RacquetModel.findById(req.params.id)
    res.render('racquets/show', {
        racquet
    })
}

async function deleteOne(req,res){
    await RacquetModel.deleteOne({_id: req.params.id});
    res.redirect('/racquets')
}

module.exports = {
    index,
    new: newRacquet,
    create,
    show,
    delete: deleteOne
}