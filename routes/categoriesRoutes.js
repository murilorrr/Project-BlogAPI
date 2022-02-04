const { Router } = require('express');
const categoriesController = require('../controller/categoriesController');
const authMiddleware = require('../middlewares/TokenAuthMiddleware');

const router = new Router();

router.delete('/:id', (req, res) => {
 res.status(404).json({ message: 'not implemented' });
});

router.get('/', (req, res) => {
  res.status(200).json({ message: 'not implemented' });
});

router.post('/', authMiddleware, categoriesController.createOneCategory);

module.exports = router;
