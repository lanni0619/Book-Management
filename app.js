const express = require("express");

const bookRoute = require("./routes/bookRoute");

const app = express();

app.use(express.json());
app.use("/api/v1/books", bookRoute);

module.exports = app;

