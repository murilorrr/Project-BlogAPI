const { Router } = require('express');
const loginController = require('../controller/loginController');

const router = new Router();

router.delete('/:id', (req, res) => {
 res.status(404).json({ message: 'not implemented' });
});

router.get('/', (req, res) => {
  res.status(200).json({ message: 'not implemented' });
});

router.post('/', loginController.postLogin);

module.exports = router;
