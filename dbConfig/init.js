const { Pool } = require("pg");

const pool = new Pool({
    PGUSER: 'dfcohocmhpzmmf',
    PGHOST: 'ec2-34-252-216-149.eu-west-1.compute.amazonaws.com',
    PGDATABASE: 'dccrt91mtusg2s',
    PGPASSWORD: '01dcaa0f2c797be037b8974ea159b624f06cae909f3da3f276a855d1338b6f93',
    PGPORT: 5432,
  })


module.exports = pool;
