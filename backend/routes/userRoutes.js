const express = require('express');
const {Router} = require('express')

const {createUser, login, deleteUser, updateUser} = require("../controllers/userControllers")

const protect = require('../middleware/protect');
const router= express.Router();

// router.get('/',async(req,res)=>{
//     res.send("It worked ");

// })

router.route('/').post(createUser);
router.route('/login').post(login);
router.route("/log/:id").put(protect,updateUser);
router.route("/log/:id").delete(protect,deleteUser);

module.exports=router;