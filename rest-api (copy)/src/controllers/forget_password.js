const nodemailer = require("nodemailer");
const randomString = require("randomstring");

const forget_password = async (req, res, next) => {
  try {
    const userData = await User.findOne({ email: req.body.email });
    const email = req.body.email;
    if (userData) {
      const randomString = randomString.generate();
      User.updateOne({email:email})
    } else {
      res.status(200).send({
        success: true,
        msg: `This email does not exists.`,
      });
    }
    return token;
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
};


module.exports = forget_password;