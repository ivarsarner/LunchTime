const apiKey = require('./api.json').key;
const axios = require('axios');

const getYelp = async (latitude, longitude, category = 'restaurants') => {
  const url = `https://api.yelp.com/v3/businesses/search?term=${category}&latitude=${latitude}&longitude=${longitude}&sort_by=distance`;
  const options = { headers: { Authorization: `Bearer ${apiKey}` } };
  const response = await axios.get(url, options);
  console.log(response.data.businesses.length);
  return response.data;
};

module.exports = getYelp;
