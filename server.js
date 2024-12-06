const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bookRoute = require("./routes/bookRoute");

const app = express();
app.use(express.json());

app.use("/api/v1/books", bookRoute);

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => console.log(`Server is listening on Port ${port}`));

