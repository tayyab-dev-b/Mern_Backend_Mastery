const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser= require('cookie-parser');



async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });

    if (isUserAlreadyExist) {
      return res.status(400).json({ message: "User already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const User = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: User._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);
    res.status(201).json({
      message: "User Registered Successfully",
      User: {
        username: User.username,
        email: User.email,
        password: User.password,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",error:error.message
    });
  }
}

async function loginUser(req,res){
    try{
        const {email,password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message:"Please provide email and password"
            })

        }

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"User not found"

            })
        }

        const isPasswordMatched = await bcrypt.compare(password,user.password);

        if(!isPasswordMatched){
            return res.status(400).json({
                message:"Invalid Credentials"
            })
        }

        const token = jwt.sign({
            id:user._id
        },process.env.JWT_SECRET)

        res.cookie('token',token);
        res.status(200).json({
            message:"User Logged In Successfully",
            user:{
                username:user.username,
                email:user.email,
                password:user.password
            }
            
        })
        

    }catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            error:error.message
            
        })
    }
}

async function profile(req,res){
  try{
    const user = await userModel.findById(req.user.id).select('-password');
    if(!user) {
      return res.status(404).json({
        message:"User not found"
      })
    }
    res.status(200).json({
      message:"user profile fetched successfully",
      user:user
    })
    
  }catch(error){
    res.status(500).json({
      message:"internval server eror",
      error:error.message
    })

  }
}

async function getAllUsers(req,res){
  try{

    const users = await userModel.find().select('-password');
    res.status(200).json({
      message:"All users fetched successfully",
      users:users
    })
  }catch(error){
    res.status(500).json({
      message:"Internal Server Error",
      error:error.message
    })
  }
}

async function logoutUser(req,res){
  try{
    res.clearCookie('token');
    res.status(200).json({
      message:"User Logged Out successfully"
    })
  }catch(error){
    res.status(500).json({
      message:"Internal Server Error",
      error:error.message
    })
  }
}


module.exports = {registerUser,loginUser,profile,getAllUsers,logoutUser}