module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6aa1342e577cf937d6734442ef8e1e44'),
  },
});
