const racquetCtrl = require('../controllers/racquets');
const router = require('express').Router();
const auth = require('../config/auth');

router.get('/', racquetCtrl.index);
router.get('/new', auth.isLoggedIn, racquetCtrl.new);
router.get('/:id', racquetCtrl.show);
router.get('/:id/edit', racquetCtrl.edit);
router.put('/:id', racquetCtrl.update);
router.post('/', auth.isLoggedIn, racquetCtrl.create);

router.delete('/:id', auth.isLoggedIn, racquetCtrl.delete);

module.exports = router;