const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = user;
        next();
    } catch (error) {
        res.clearCookie("token");
    }
}