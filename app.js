require("dotenv").config();// by this only .env file be used
const express = require("express");

const app = express();

const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.json({message : "Hello From POS server!"});
})

app.listen(PORT, () => {
    console.log(`POS Server is listening on PORT ${PORT}`);
})