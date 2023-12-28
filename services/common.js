const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQwOWM3NGNlNGZkYzU3ZDFlZmVhZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAzNzQ0NDI2fQ.N4bmJrxknVv9CpJaaOlqnaITJbVssd2DIsvw_JYC6bc"
  return token;
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}
