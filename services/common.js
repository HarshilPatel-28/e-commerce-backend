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
  // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQwOWI4NGNlNGZkYzU3ZDFlZmVhZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwMzc1NDE5NH0.n408rxLvpBHxIDvDA9XE76Vpg7QBoEwLSlTeH-m9_Pw"
  return token;
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}
