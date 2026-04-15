require("dotenv").config();// by this only .env file be used
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const createHttpError = require("http-errors");

const PORT = config.port;
connectDB();

// Root End Point
app.get("/", (req, res) => {
    res.json({message : "Hello From POS server!"});
})

// Other End Points
app.use("/api/users", require("./routes/userRoute"));


// Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`POS Server is listening on PORT ${PORT}`);
})