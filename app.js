const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const apiRoutes = require('./routes/apiRoutes');
const { requireAuth } = require('./middlewares/authMiddleware');
const app = express();

// Connect to MongoDB
const db = require('./config/database');
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Set Pug as the view engine
app.set('view engine', 'pug');

// Routes
app.use('/auth', authRoutes);
app.use('/profile', requireAuth, profileRoutes);
app.use('/api', apiRoutes);

// Base route
app.get('/', (req, res) => res.render('index'));

// Start the server
const PORT = process.env.PORT || 4442;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
