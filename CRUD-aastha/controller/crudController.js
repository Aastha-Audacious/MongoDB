
const userSchema = require("../models/userSchema");
const  bcrypt = require('bcrypt')

// create a user

const createUser = async (req, res) => {
  const user = new userSchema({
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    password: await bcrypt.hash(req.body.password,10),
    city: req.body.city,
  });
  try {
    userData = await user.save();
    res.status(201).send({
      success: "success",
      message: "user has created successfully",
      data: userData,
    });
  } catch (err) {
    res.status(500).send({
      success: "failure",
      message: "error occured" + err.message,
    });
  }
};

const getAllUser = async(req, res)=>{
try {
  const users= await userSchema.find();
  res.json(users);
} catch (error) {
  res.json({error})
}
}

const countUsers = async(req, res)=>{
  try {
    const users= await userSchema.find().count();
    res.json(users);
  } catch (error) {
    res.json({error})
  }
  }
//get user

const getUser = async(req,res)=>{
    try{
        const userData = await userSchema.findById(req.params.id)
        res.status(200).send({
            success: "success",
            message: "user get successfully",
            data: userData
        })

    }
    catch(err){
        res.status(500).send({
            success: "failure",
            message: "error occured" + err.message
        
        })

    }
}

//update user
const updateUser = async(req,res)=>{
    try{
        const userData = await userSchema.findByIdAndUpdate(req.params.id,{
          userName:req.body.userName,
          userEmail:req.body.userEmail,
          city:req.body.city,
          password:req.body.password
        })
        res.status(200).send({
          success:"success",
          message:"user has updateded successfully ",
          data: userData

        })

    }catch(err){
      res.status(500).send({
        success:"failure",
        message:"error occured" + err.message

      })

    }
}
//delete 
const deleteUser = async(req,res)=>{
  try{
    const userData = await userSchema.findByIdAndDelete(req.params.id)
    res.status(200).send({
      success:"success",
      message:"user has deleted successfully",
      data: userData
    })

  }catch(err){
    res.status(500).send({
      success:"failure",
      message:"error occured" + err.message
    })  
  }
}

module.exports = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  countUsers
};
