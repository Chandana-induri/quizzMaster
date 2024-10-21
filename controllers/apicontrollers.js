const axios = require('axios');

// Fetch weather data
exports.getWeather = async (req, res) => {
    try {
        const { city } = req.query;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Fetch currency rates
exports.getCurrency = async (req, res) => {
    try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
