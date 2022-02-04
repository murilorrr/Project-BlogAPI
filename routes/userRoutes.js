const { Router } = require('express');
const { createUser } = require('../controller/userController');

const router = new Router();

router.delete('/', (req, res) => {
 res.status(404).json({ message: 'not implemented' });
});

router.get('/', (req, res) => {
  res.status(200).json({ message: 'not implemented' });
});

router.post('/', createUser);

module.exports = router;
