const RacquetModel = require('../models/racquet')

async function index(req,res){
    if (req.query.make){
        console.log('we are in the if statement')
        const racquets = await RacquetModel.find({make: req.query.make})
        res.render('racquets/index',{
            racquets,
            requery: req.query
        })
    } else {
        console.log('we are in the else statment')
        const racquets = await RacquetModel.find({})
        res.render('racquets/index',{
            racquets,
            requery: null
        })
    }
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
    return array.filter(r =>{
        if (r.make === make) return r;
    })
}