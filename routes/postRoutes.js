const { Router } = require('express');
const postController = require('../controller/postController');

const router = new Router();
const authMiddleware = require('../middlewares/TokenAuthMiddleware');

router.delete('/:id', authMiddleware, postController.deleteOne);
 
 router.get('/', authMiddleware, postController.getAll);
 
 router.post('/', authMiddleware, postController.createOne);
 
module.exports = router;