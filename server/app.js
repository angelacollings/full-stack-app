const express = require("express");
const app = express();
const cors = require("cors");

const contentRouter = require("./routes/contentRoutes");

//middleware
app.use(cors());
app.use(express.json());
const { errorHandler } = require("./middleware/errorHandler");

//routes
app.use("/api/content", contentRouter);

//errorhandler
app.use(errorHandler);

module.exports = app;
