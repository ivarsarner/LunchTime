const apiKey = require('./api.json').key;
const axios = require('axios');

const getYelp = async (latitude, longitude, category = 'food') => {
  const url = `https://api.yelp.com/v3/businesses/search?term=${category}&latitude=${latitude}&longitude=${longitude}`;
  const options = { headers: { Authorization: `Bearer ${apiKey}` } };
  const response = await axios.get(url, options);
  return response.data;
};

module.exports = {
  getYelp,
};
