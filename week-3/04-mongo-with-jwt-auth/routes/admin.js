const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db")
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("..");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    }).then(function() {
            res.status(200).json({
                msg: "Admin Created Sussesfully"
            });
    }).catch(function(){
            res.status(404).json({
                msg: "Internal Server Error"
            });
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;

    const user = await User.find({
        username,
        password
    })

if(user){    const token = jwt.sign(username, JWT_SECRET);

    res.json({
        token
    })
}   else{
    res.json({
        msg: "Authentication Issue"
    })
}


});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;