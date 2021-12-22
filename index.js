const express = require('express/');
// const routes = require("./routes/routes");
// const {connect} = require('./config/database');
const app = express();
const port = 8000;

// establish connection with database
// connect();


// use external routes file
// app.use("/", routes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});