const express = require('express');
const {registerUser,loginUser,profile,getAllUsers,logoutUser} = require('../controllers/auth.controller');
const {authenticateToken} = require('../middlewares/middleware');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticateToken,profile);
router.get('/allUsers', authenticateToken, getAllUsers);
router.post('/logout', authenticateToken, logoutUser);


module.exports = router;
