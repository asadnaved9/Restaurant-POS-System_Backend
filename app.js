require("dotenv").config();// by this only .env file be used
const express = require("express");
const app = express();
const connectDB = require("./config/database");

const PORT = process.env.PORT;
connectDB();


app.get("/", (req, res) => {
    res.json({message : "Hello From POS server!"});
})

app.listen(PORT, () => {
    console.log(`POS Server is listening on PORT ${PORT}`);
})