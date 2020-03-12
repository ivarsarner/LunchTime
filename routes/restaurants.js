var express = require('express');
var router = express.Router();
const { getYelp } = require('../api/api.js');
const { saveToDb, readDb } = require('../db/db.js');

const filterRestaurants = (data) => {
  return data.sort((a, b) => (a.distance > b.distance ? 1 : -1)).slice(0, 10);
};

router.get('/', async (req, res) => {
  const dbData = await readDb();
  const data = JSON.parse(dbData);
  const restos = filterRestaurants(data.businesses);
  res.json(restos);
});

const storeDataObject = async () => {
  const epiLat = '59.333861';
  const epiLong = '18.066157';
  const data = await getYelp(epiLat, epiLong);
  saveToDb(data);
};

//storeDataObject();

module.exports = router;
