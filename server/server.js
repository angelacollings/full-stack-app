const app = require("./app");

const port = process.env.SERVER_PORT || 5001;

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

module.exports = app;
