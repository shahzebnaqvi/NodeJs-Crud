const { Pool } = require('pg')
require('dotenv').config()

console.log(process.env);

const pool = new Pool({
    user: 'lojagbfdowldeb',
    host: 'ec2-52-21-136-176.compute-1.amazonaws.com',
    database: 'd2lurrpiv5et3n',
    password: 'a87bc42ea1d4c1a94b284562bff54c8d10fd6c8bb9cfe7713b52465be1b6d254',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
})

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB,
//     password: process.env.DB_PASS,
//     port: process.env.DB_PORT,
//     ssl:{
//         rejectUnauthorized: false
//     }
// })
module.exports = pool;