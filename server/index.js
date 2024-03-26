const express = require('express')
const passport = require('passport')

const app = express()

const authRoutes = require('./src/routes/authRoutes');
const articleRoutes = require('./src/routes/articleRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server started on port 8000");
});