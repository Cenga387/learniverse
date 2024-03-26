const Article = require('../models/article'); // Assuming you have an Article model

// Get all articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get article by ID
exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new article
exports.createArticle = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newArticle = new Article({ title, content });
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an existing article
exports.updateArticle = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedArticle) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(updatedArticle);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an article
exports.deleteArticle = async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);
        if (!deletedArticle) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json({ message: 'Article deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
