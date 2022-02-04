const { Router } = require('express');
const userController = require('../controller/userController');
const authMiddleware = require('../middlewares/TokenAuthMiddleware');

const router = new Router();

router.delete('/', (req, res) => {
 res.status(404).json({ message: 'not implemented' });
});

router.get('/', authMiddleware, userController.getAll);

router.post('/', userController.createUser);

module.exports = router;
