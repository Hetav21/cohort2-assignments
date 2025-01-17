const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    const newUser = await User.create({
        username,
        password,
    })

    res.status(200).json({
        msg: "User Created Succesfully",
        newUser
    });
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

    const courseId = req.params.courseId;
    const username = req.headers.username;

    const newCourse = await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.status(200).json({
        msg: "Course Added Succesfully",
    });

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
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