const fs = require('fs');
const util = require('util');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'db', 'yelp.json');

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const saveToDb = async (data) =>
  await writeFile('../db/yelp.json', JSON.stringify(data, null, 2));

const readDb = async () => await readFile(dbPath, 'utf8');
// ../db/yelp.json

module.exports = {
  saveToDb,
  readDb,
};
