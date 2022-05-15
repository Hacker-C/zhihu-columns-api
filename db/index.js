const mysql = require('mysql')
const config = require('../config/db.config')
const db = mysql.createConnection(config)

module.exports = db
