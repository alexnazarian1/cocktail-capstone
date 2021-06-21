const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.collections.index);
router.get('/:id', ctrl.collections.show);
router.post('/', ctrl.collections.create);
router.put('/:id', ctrl.collections.update);
router.delete('/:id', ctrl.collections.destroy);

module.exports = router;