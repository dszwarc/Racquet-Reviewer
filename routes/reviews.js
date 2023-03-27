const auth = require('../config/auth');
const reviewsCtrl = require('../controllers/reviews');
const router = require('express').Router();

router.get('/reviews/:id/edit', reviewsCtrl.edit);
router.get('/racquets/:id/reviews/new', reviewsCtrl.new);
router.delete('/reviews/:id', auth.isLoggedIn, reviewsCtrl.delete);
router.post('/racquets/:id/reviews', reviewsCtrl.create);
router.put('/reviews/:id', reviewsCtrl.update);

module.exports = router;