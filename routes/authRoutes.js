const passport = require('passport');
// when user goes to this route, we want to kick them off into the OAuth flow
// GoogleStrategy has internal identifier of 'google'
// scope specifies what access we want to have inside of google

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  // this time google strategy will see the code in the url
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send('Successfully logged out!');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
