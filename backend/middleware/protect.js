const jwt = require ("jsonwebtoken");

const User = require("../models/userModel")

const protect = async (req,res,next)=>{

    try {
        const token = req.headers.authorization.split(' ')[1];
        // console.log(token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decodedToken);
        const user = await User.findById(decodedToken.id);
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        next();
      } catch (error) {
        res.status(401).json({ message: 'Invalid credentials' });
      }

}
module.exports=protect;

