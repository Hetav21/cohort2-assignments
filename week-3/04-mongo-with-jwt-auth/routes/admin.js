const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db")
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

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
    const password = req.body.password;

    const response = await Admin.find({
        username,
        password
    })


if(response){    const token = jwt.sign(username, JWT_SECRET);

    res.json({
        token
    })
}   else{
    res.json({
        msg: "Authentication Issue"
    })
}


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const desc = req.body.desc;

    const newCourse = await Course.create({
        title,
        desc,
        price,
        imageLink
    });
        
    res.status(200).json({
        msg: "Course Created Succesfully",
        courseId:  newCourse._id
    })
});


router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const resposne = await Course.find({});
    
    res.status(200).json({
        courses: resposne
    })

});

module.exports = router;