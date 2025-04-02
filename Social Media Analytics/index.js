const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

// Middleware to extract Bearer token
const authMiddleware = require("./middlewares/authMiddleware");
app.use(authMiddleware);

// Routes
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});