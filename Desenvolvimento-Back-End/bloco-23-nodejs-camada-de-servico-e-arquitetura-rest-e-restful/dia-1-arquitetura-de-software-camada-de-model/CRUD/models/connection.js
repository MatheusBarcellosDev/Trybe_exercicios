const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'matheusbarcellosdev',
    password: '45Rf66rf66rf@',
    host: 'localhost',
    database: 'model_example'
});

module.exports = connection;
