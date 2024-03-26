const express = require('express');
const router = express.Router();

// Import controllers
const articleController = require('../controllers/articleController');

// Define article routes
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
