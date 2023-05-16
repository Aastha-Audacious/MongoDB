const User = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, 'HhR!sqq%??NP9sSh&KUT84qR7AVFegJ!', {
    expiresIn: maxAge,
  });
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.log(err);
    res.status(400).send('error, user not created');
  }
};

const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const auth = await user.authenticate(password);
      if (auth) {
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
      } else {
        res.status(400).send('incorrect password');
      }
    } else {
      res.status(400).send('email not found');
    }
  } catch (err) {
    console.log(err);
    res.status(400).send('error, please try again');
  }
};

module.exports = {
  signup_post,
  login_post,
};