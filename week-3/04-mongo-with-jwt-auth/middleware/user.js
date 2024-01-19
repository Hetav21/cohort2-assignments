function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    try {    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, secret["JWT_SECRET"]);

    if(decodedValue.username){
        req.username = decodedValue.username;
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

module.exports = userMiddleware;