
const generateToken = require("../config/generateToken")
const User = require("../models/userModel")
const bcrypt = require('bcrypt');

const  createUser = async(req,res)=>{
    try{
    const {name,email,mobile,password}=req.body;

    if(!name || !email || !mobile || !password){
     return  res.status(400).json({error:"Filled the required entity"})
   
    }
    const userFind = await User.findOne({email})
    if(userFind){
       return  res.status(400).json({error:"User already present"})
    
    }
    else{

   
        const user = await User.create({name,email,mobile,password});
        return res.status(200).json({message:"User created Successfuly",user,token:generateToken(user._id)});
    }  
    }catch(err){
        return res.status(400).json({message:"Internal Server Error",error:`${err}`});
    }



}


const updateUser =  async(req, res, next)=>{
        
    let user=await User.findById(req.params.id);


    if(!user){
        return res.status(400).json({message:"Product not found"});
        
    }

   user= await User.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
   }
   )
    
   return  res.status(200).json({success:"true",message:"updated the product",user});



};


const login=async(req,res)=>{


    const {email,password}=req.body;
    
      const user =await User.findOne({email});
    
      if(user && await bcrypt.compare(password,user.password)){
        return res.status(200).json({user,token:generateToken(user._id)});
    
      }
      else{
        return res.status(400).json({error:'Invalid Email or Password',user})
      }
        
    
    
    
    }
    const deleteUser= async(req,res,next)=>{

  
        const user= await User.findByIdAndDelete(req.params.id);
         
        if(!user){
            return res.status(400).json({message:"User not found"});
        
        }
          
          res.status(200).json({success:"true",message:"Successfully Deleted the product"});
     
      
      
  
  }

module.exports = {createUser,login,deleteUser,updateUser};