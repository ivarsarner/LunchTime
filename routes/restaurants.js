var express = require('express');
var router = express.Router();
const getYelp = require('../api/api.js');

const filterRestaurants = (data) => {
  return data
    .filter((restaurant) => !restaurant.is_closed)
    .sort((a, b) => (a.distance > b.distance ? 1 : -1))
    .slice(0, 10);
};

router.get('/:lat/:long', async (req, res) => {
  const data = await getYelp(req.params.lat, req.params.long);
  const restaurants = filterRestaurants(data.businesses);
  res.json(restaurants);
});

module.exports = router;
