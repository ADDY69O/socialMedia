const jwt = require ("jsonwebtoken");

const User = require("../models/userModel")

const protect = async (req,res,next)=>{

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken.userId);
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        req.user = user;
        next();
      } catch (error) {
        res.status(401).json({ message: 'Invalid credentials' });
      }

}
module.exports=protect;

