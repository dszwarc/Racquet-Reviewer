module.exports = {
    index,
    new: newRacquet,
    create
}

function index(req,res){
    res.render('racquets/index')
}

function newRacquet(req, res){
    res.render('racquets/new')
}

async function create(req, res){

}