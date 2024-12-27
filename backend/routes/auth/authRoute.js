const express = require("express");
const {
    registerUser,
    loginUser,
    logoutUser,
    authMiddleware,
  } = require('../../controller/auth/authController');

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/checkAuth", authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
      success: true,
      message: "Authenticated user!",
      user,
    });
  });
  
  module.exports = router;

