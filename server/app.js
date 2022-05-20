const express = require("express");
const app = express();
const cors = require("cors");

const contentRouter = require("./routes/contentRoutes");

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/content", contentRouter);

module.exports = app;
