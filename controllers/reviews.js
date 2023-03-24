const RacquetModel = require('../models/racquet')
const UserModel = require('../models/user')

module.exports = {
    create,
    new: newReview
}

async function newReview(req, res){
    const racquet = await RacquetModel.findById(req.params.id)
    console.log(racquet)
    res.render('reviews/new', {racquet})
}

async function create(req, res){
    const racquet = await RacquetModel.findById(req.params.id);
    req.body.username = req.user.name;
    req.body.userId = req.user._id;
    req.body.userAvatar = req.user.avatar;
    racquet.reviews.push(req.body);
    (await racquet).save();
    res.redirect(`/racquets/${req.params.id}`)
}