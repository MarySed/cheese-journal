require("dotenv").config();
const knex = require("knex");
const knexfile = require("../knexfile.js");

const db = knex(knexfile);

module.exports = db;
