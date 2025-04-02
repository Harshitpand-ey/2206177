const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ error: "Access token required" });
    }
    req.apiToken = authHeader.split(" ")[1];
    next();
};
module.exports = authMiddleware;