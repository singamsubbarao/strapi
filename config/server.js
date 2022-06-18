module.exports = ({ env }) => ({
  host: env('HOST', '43.204.89.74'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
