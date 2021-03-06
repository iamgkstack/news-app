const supertest = require('supertest');
const dotenv = require('dotenv');

process.env.NODE_ENV = 'test'; // just in case if test started by `mocha`
/* Load config from .env file at very beginning of app */
dotenv.config();

const { start, lower } = require('../app');

const request = supertest(require('../app').default);

before((done) => {
  start(async () => {
    global.request = request;
    done();
  });
});

after((done) => {
  lower(done);
});
