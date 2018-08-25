const pg = require('pg');
const cache = require('./vacation-me-cache');
const promise = require('bluebird');

console.log(process.env.PGHOST);

const pool = new pg.Pool();

pool.on('connect', function() {
  process.env.VERBOSE && console.log('client connected');
});

pool.on('error', function(err) {
  pool.end();
  console.log('There was a error with pg', err);
  process.exit(-1);
});

module.exports = pool;

pool.connectAndEnd = function(action) {
  return new promise(function(resolve, reject) {
    pool.connect(function(err, client) {
      process.env.VERBOSE && console.log('connecting and end', err, client);
      if (err) {
        return reject(err);
      }

      return action(client)
        .then(function(res) {
          process.env.VERBOSE && console.log('action good:', res);
          client.release();
          return resolve(res);
        })
        .catch(function(err) {
          process.env.VERBOSE && console.log('action bad:', err);
          client.release();
          return reject(err);
        });
    });
  });
};

pool.Detail = require('./Detail');
