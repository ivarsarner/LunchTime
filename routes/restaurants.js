var express = require('express');
var router = express.Router();
const { getYelp } = require('../api/api.js');
const { saveToDb, readDb } = require('../db/db.js');

const filterRestaurants = (data) => {
  return data
    .filter((restaurant) => restaurant.is_closed === false)
    .sort((a, b) => (a.distance > b.distance ? 1 : -1))
    .slice(0, 10);
};

router.get('/:lat/:long', async (req, res) => {
  console.log(req.params.lat);
  console.log(req.params.long);
  /*   const dbData = await readDb();
  const data = JSON.parse(dbData);
 */

  const data = await getYelp(req.params.lat, req.params.long);
  const restaurants = filterRestaurants(data.businesses);
  res.json(restaurants);
});

const storeDataObject = async () => {
  const epiLat = '59.333861';
  const epiLong = '18.066157';
  const data = await getYelp(epiLat, epiLong);
  saveToDb(data);
};

//storeDataObject();

module.exports = router;
