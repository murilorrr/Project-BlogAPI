const { Router } = require('express');
const userController = require('../controller/userController');
const authMiddleware = require('../middlewares/TokenAuthMiddleware');

const router = new Router();

router.get('/', authMiddleware, userController.getAll);

router.post('/', userController.createUser);

router.get('/:id', authMiddleware, userController.getById);

router.delete('/me', authMiddleware, userController.deleteOne);

module.exports = router;
