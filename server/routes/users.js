  
const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
const userController = require("../controller/userController");
const User = require ("../models/Users");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/me", auth, userController.getUserDetails);
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    if(users.length > 1){
      res.json(users);
    } else {
      res.send('No user');
    }
  } catch (err) {
    console.log(err);
  }
})
module.exports = router;