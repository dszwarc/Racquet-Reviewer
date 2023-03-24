const reviewsCtrl = require('../controllers/reviews');
const router = require('express').Router();


router.get('/racquets/:id/reviews/new', reviewsCtrl.new);

router.post('/racquets/:id/reviews', reviewsCtrl.create)

module.exports = router;