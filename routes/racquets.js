const racquetCtrl = require('../controllers/racquets');
const router = require('express').Router();


router.get('/', racquetCtrl.index);
router.get('/new', racquetCtrl.new);
router.get('/:id', racquetCtrl.show);
router.get('/:id/edit', racquetCtrl.edit);
router.put('/:id', racquetCtrl.update);
router.post('/', racquetCtrl.create);

router.delete('/:id', racquetCtrl.delete);

module.exports = router;