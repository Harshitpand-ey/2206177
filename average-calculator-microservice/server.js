const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const numbersRoutes = require("./routes/numbersRoute");
app.use("/numbers", numbersRoutes); 

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
