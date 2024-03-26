const express = require('express');
const router = express.Router();

// Import controllers
const categoryController = require('../controllers/categoryController');

// Define category routes
router.get('/geography', categoryController.getGeographyArticles);
router.get('/history', categoryController.getHistoryArticles);
router.get('/science', categoryController.getScienceArticles);
router.get('/art', categoryController.getArtArticles);
router.get('/nature-wildlife', categoryController.getNatureWildlifeArticles);
router.get('/biographies', categoryController.getBiographies);

module.exports = router;
