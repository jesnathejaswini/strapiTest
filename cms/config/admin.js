module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd072bf893bb5c22de899ec46a90d1c8'),
  },
});
