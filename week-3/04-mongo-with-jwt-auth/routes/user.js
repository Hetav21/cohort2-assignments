const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    const resposne = await User.create({
        username,
        password
    })

    if(resposne) {
        res.status(200).json({
            msg: "User Created Succesfully"
        })
    }

    else{
        res.status(404).json({
            msg: "Server Error"
        })
    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const userFind = await User.find({
        username,
        password
    })

    if(userFind){
        const token = jwt.sign(username, JWT_SECRET);

        res.status(200).json({
            token
        })
    }  else{
        res.status(403).json({
            msg: "Authentication Error"
        })
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const resposne = await Course.find({});

    res.status(200).json({
        Courses: resposne
    });

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const username = req.username;
    const courseId = req.params.courseId;

    const newCourse = await User.updateOne({username: username}, {
        "$push": {
            purchasedCourses: courseId
        }
    });

    res.status(200).json({
        msg: "Course Added Successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.username;

    const user = await User.findOne({
        username
    })

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.status(200).json({
        courses: courses
    })

});

module.exports = router