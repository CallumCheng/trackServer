const { Pool } = require("pg");

const pool = new Pool({
    user: 'dfcohocmhpzmmf',
    host: 'ec2-34-252-216-149.eu-west-1.compute.amazonaws.com',
    database: 'dccrt91mtusg2s',
    password: '01dcaa0f2c797be037b8974ea159b624f06cae909f3da3f276a855d1338b6f93',
    port: 5432,
    connectionString:'postgres://dfcohocmhpzmmf:01dcaa0f2c797be037b8974ea159b624f06cae909f3da3f276a855d1338b6f93@ec2-34-252-216-149.eu-west-1.compute.amazonaws.com:5432/dccrt91mtusg2s',
    ssl:{
        rejectUnauthorized:false
    }
})
module.exports = pool;
