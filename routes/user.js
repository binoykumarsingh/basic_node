const express = require('express');
const router = express.Router();
const user = require('../controller/userController');

router.get('/', user.getUsers);
router.post('/', user.addUser);

module.exports = router;
