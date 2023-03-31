const RacquetModel = require('../models/racquet')
const UserModel = require('../models/user')

module.exports = {
    create,
    new: newReview,
    delete: deleteOne,
    edit,
    update
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
    racquet.save();
    res.redirect(`/racquets/${req.params.id}`)
}

async function deleteOne(req, res){
    try{
        const racquet = await RacquetModel.findOne({
            "reviews._id": req.params.id,
            "reviews.userId": req.user._id,})
        if (!racquet) return res.redirect('/racquets')

        racquet.reviews.remove(req.params.id)
        await racquet.save()
        res.redirect(`/racquets/${racquet._id}`)
    } catch(err){
        console.log(err)
    }   
}

async function edit(req, res){
    try {
        const racquet = await RacquetModel.findOne({'reviews._id': req.params.id})
        if (!racquet){
            return res.redirect('/')
        }
        const review = racquet.reviews.id(req.params.id);
        res.render('reviews/edit', {racquet, review})
    } catch(err){
        console.log(err)
    }
}

async function update(req, res){
    try{
        const racquet = await RacquetModel.findOne({'reviews._id': req.params.id})
        console.log(racquet, ' < ---- this is the racquet doc in the update function')
        const review = racquet.reviews.id(req.params.id)
        console.log(review, '  <--- this should be the individual review on the racquet matching the id')
        review.content = req.body.content;
        review.groundRating = req.body.groundRating;
        review.serveRating = req.body.serveRating;
        review.title = req.body.title;
        review.volleyRating = req.body.volleyRating;
        racquet.save();
        res.redirect(`/racquets/${racquet._id}`)
    }catch(err){
        console.log(err)
    }
}