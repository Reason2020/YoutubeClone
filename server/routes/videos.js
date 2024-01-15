const express = require('express');
const { getAllVideos } = require('../controllers/videos');
const router = express.Router();

router.get('/', getAllVideos);

module.exports = router