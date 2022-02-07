const { Router } = require('express');
const postController = require('../controller/postController');

const router = new Router();
const authMiddleware = require('../middlewares/TokenAuthMiddleware');

router.delete('/:id', (req, res) => {
  res.status(404).json({ message: 'not implemented' });
 });
 
 router.get('/', (req, res) => {
   res.status(200).json({ message: 'not implemented' });
 });
 
 router.post('/', authMiddleware, postController.createOne);
 
module.exports = router;