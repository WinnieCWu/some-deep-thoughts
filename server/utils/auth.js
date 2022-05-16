const jwt = require('jsonwebtoken');

//this secret enables server to verify whether it recognizes this token
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    //signToken fxn expects a user {] and will add that user's properties to the token
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};