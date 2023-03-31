const express = require('express');
const {Router} = require('express')

const {createUser, login, deleteUser, updateUser} = require("../controllers/userControllers")

const router= express.Router();

// router.get('/',async(req,res)=>{
//     res.send("It worked ");

// })

router.route('/').post(createUser);
router.route('/login').post(login);
router.route("/products/:id").put(updateUser);
router.route("/products/:id").delete(deleteUser);

module.exports=router;