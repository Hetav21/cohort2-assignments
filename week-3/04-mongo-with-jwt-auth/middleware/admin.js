const jwt = require("jsonwebtoken");
const  secret  = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

try {    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, secret["JWT_SECRET"]);

    if(decodedValue){
        next()
    } else {
        res.status(403).json({ msg: "Authentication Error"}); 
    }
} catch(e){
    res.json({
        msg: "Incorrect Inputs"
    })
}

}

module.exports = adminMiddleware;