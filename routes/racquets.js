const racquetCtrl = require('../controllers/racquets');
const router = require('express').Router();

router.get('/', racquetCtrl.index);
router.get('/new', racquetCtrl.new);

router.post('/', racquetCtrl.create);

module.exports = router;