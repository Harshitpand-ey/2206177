exports.authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }
  
    req.token = authHeader.split(" ")[1]; 
    next();
  };
  