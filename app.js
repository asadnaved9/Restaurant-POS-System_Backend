require("dotenv").config(); // by this only .env file be used
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const createHttpError = require("http-errors");
const cookieParser = require("cookie-parser");

const PORT = config.port;
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Root End Point
app.get("/", (req, res) => {
  res.json({ message: "Hello From POS server!" });
});

// Other Endpoints
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoute"));

// Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`✅ POS Server is listening on PORT ${PORT}`);
});
