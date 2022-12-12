module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'DbkOiat4uEGZSbOR'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '4GbZ2IWZZjqLDGtZ'),
  },
});
