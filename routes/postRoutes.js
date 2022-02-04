const { Router } = require('express');
const postController = require('../controller/postController');

const router = new Router();

router.delete('/:id', (req, res) => {
  res.status(404).json({ message: 'not implemented' });
 });
 
 router.get('/', (req, res) => {
   res.status(200).json({ message: 'not implemented' });
 });
 
 router.post('/', postController.createOne);
 
module.exports = router;