const racquetCtrl = require('../controllers/racquets');
const router = require('express').Router();


router.get('/', racquetCtrl.index);
router.get('/new', racquetCtrl.new);
router.get('/:id', racquetCtrl.show);

router.post('/', racquetCtrl.create);

router.delete('/:id', racquetCtrl.delete);

module.exports = router;