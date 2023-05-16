
const User = require('../model/user')

const register = async(req, res)=>{
res.send("working user controller")
}

const getallusers = async(req, res)=>{
    res.send("getalluser is working");
    await User.find()
    .then((result) => {
      res.status(200).json({
        userData: result,
      });
    })

    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

const signup = async(req, res)=>{
    const username= req.body.username;
    const email= req.body.email;
    const password= req.body.password;
    const confirmPassword= req.body.confirmPassword;
    if(!username || !email ||!password){
      return res.json({
        msg:`Fullname, email, and password are required!`
      })
    }
    if(!username){
      return res.json({
        msg:`Please enter your fullname.`
      })
    }
    if(!email){
      return res.json({
        msg:`Please enter your email.`
      })
    }
    if(!password){
      return res.json({
        msg:`Please enter your password.`
      })
    }
    if(!confirmPassword){
      return res.json({
        msg:`Please Confirm your password.`
      })
    }

    if(password!=confirmPassword){
      return res.json({
        msg:`Password and confirm password should be same.`
      })
    }else{
      bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(err){
          return res.json({
            msg:`Password required!`,
            error:err
          })
        }else{
          const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
          });
    
          user
            .save()
            .then((result) => {
              console.log(result);
              res.status(201).json({
                msg: `User Registered Successfully`,
                new_user: result
              });
            })
            .catch((error) => {
              console.log(error);
              res.status(500).json({
                error: error,
              });
            });
        }
      });
    }
};

const login = async(req, res)=>{
    User.find({ username: req.body.username })
    .exec()
    .then((user) => {    //array me milega isme 
      if (user.length < 1) {
        return res.status(404).json({
          msg: `User not exist.`
        })
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (!result) {
          return res.status(401).json({
            msg: `Please enter valid credentials!`,
          })
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user[0].username,
              email: user[0].email,
            },
            `this is dummy text`, //secret key for your token
            {
              expiresIn: "24h"  //expiry of token
            }
          );
          res.status(200).json({
            msg:`Login Successfully`,
            username: user[0].username,
            email: user[0].email,
            token: token
          })
        }
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

module.exports = {
    register, 
    getallusers, 
    signup, 
    login
}