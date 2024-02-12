const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');

const weatherController = require('./controllers/weatherController');
const wikipediaController = require('./controllers/wikipediaController');
const geocodingController = require('./controllers/geocodingController');
const adminControllers = require('./controllers/adminControllers');
const userController = require('./controllers/userController');
const historyController = require('./controllers/historyController');
 
const app = express();
app.use(cors());
app.use(express.json());

const PORT = config.express.PORT;
const CLIENT_PATH = config.express.clientPath;

// Set up MongoDB connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, CLIENT_PATH)); // Adjusted the views directory path

app.use('/', adminControllers);
app.use('/', userController);
app.use('/', historyController);
app.use('/weather', weatherController);
app.use('/wikipedia', wikipediaController);
app.use('/geocoding', geocodingController);

// Serve static files after routes to avoid interference
app.use(express.static(path.join(__dirname, CLIENT_PATH)));

// Handle root URL
app.get('/', (req, res) => {
  res.render('login');
});

app.get('/main', (req, res) => {
  res.render('index');
});

app.get('/queries', (req, res) => {
  res.render('history');
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
