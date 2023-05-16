const nodemailer = require("nodemailer");

const sendMail = async (req, res, next) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'queen.christiansen@ethereal.email',
        pass: 'TjyKVbDFrBS55VTGAY'
    }
});
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Aastha Panwar 👻" <queen.christiansen@ethereal.email>', // sender address
    to: "aasthapanwar0710@gmail.com", // list of receivers
    subject: "Subject- Hello Aastha! ✔", // Subject line
    text: "Text- Hello Aastha Panwar", // plain text body
    html: "<b>html- Hello Aastha!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);


  res.send("I am sending mail");
};

module.exports = sendMail;
