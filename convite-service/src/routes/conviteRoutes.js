const express = require('express');
const conviteServiceController = require('../controllers/conviteServiceController');

const router = express.Router();

router.post('/convite/enviaremail', conviteServiceController.enviarEmail);

module.exports = router;
  