const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const multer = require('multer');
const upload = multer();

router.post('', upload.fields([{ name: 'passport' }, { name: 'addressProof' }]), registerController.registerVoter);

module.exports = router;
