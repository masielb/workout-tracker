// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// Express
const PORT = process.env.PORT || 8000;
const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mongodb
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(
    MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );  

// Routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// Server listening
app.listen(PORT, () => {
    console.log('App running on port 8000!');
});