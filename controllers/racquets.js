const UserModel = require('../models/user')
const RacquetModel = require('../models/racquet')

async function index(req,res){
    const racquets = await RacquetModel.find({})
    const baboRacquets = racquets.filter(r =>{
        if (r.make === 'Babolat') return r;
    })

    const wilsonRacquets = findRacquets('Wilson', racquets)
    console.log(baboRacquets)
    console.log(wilsonRacquets, ' <--- these are all wilson racquets')
    res.render('racquets/index',{
        racquets,
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

async function edit(req,res){
    const racquet = await RacquetModel.findById(req.params.id)
    res.render('racquets/edit',{racquet})
}

async function update(req, res){
    await RacquetModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/racquets/${req.params.id}`)
}

module.exports = {
    index,
    new: newRacquet,
    create,
    show,
    delete: deleteOne,
    edit,
    update
}

function findRacquets(make, array){
    array.filter(r =>{
        if (r.make === make) return r;
    })
}