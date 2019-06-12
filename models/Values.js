const db = require("../config/db");

const valuesFromDb = db.query("SELECT * FROM values");

module.exports = valuesFromDb;
