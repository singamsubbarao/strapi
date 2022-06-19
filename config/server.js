module.exports = ({ env }) => ({
  host: env('HOST', '43.204.89.74'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('vEQkRCHQ5Bk8SI7xp0suhA==,KaYnCzay7kAG0QsKDXCkVA==,226uSePmRX5Cv15d0J+3kw==,HJlO3jRWJbP2I3xJAXye9A=='),
  },
});
const strapi = require('strapi');

// start strapi application
strapi().start();

