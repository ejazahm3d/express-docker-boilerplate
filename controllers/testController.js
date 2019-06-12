const valuesFromDb = require("../models/Values");
const db = require("../config/db");

const getValues = (req, res) => {
  return valuesFromDb
    .then(values => res.json(values.rows))
    .catch(error => console.log(error));
};

const getValueById = (req, res) => {
  return db
    .query(`SELECT * FROM values WHERE "id" = $1`, [req.params.id])
    .then(value => res.json(value.rows))
    .catch(error => console.log(error));
};
module.exports = {
  getValueById,
  getValues
};
