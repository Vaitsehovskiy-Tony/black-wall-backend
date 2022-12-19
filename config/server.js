module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
    // host: env('HOST', '188.120.234.3'),
  port: env.int('PORT', 1337),
    app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
  url: 'https://vaitstony.art/',
  proxy: true,
});
