const http = require("http");

module.exports = ({ env }) => ({
  host: env('HOST', 'http://188.120.234.3/'),
  port: env.int('PORT', 1337),
    app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
  url: 'http://188.120.234.3/',
  proxy: true,
});
