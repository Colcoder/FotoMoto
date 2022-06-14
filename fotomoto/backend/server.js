//require installed packages
const express = require("express");
const mongoose = require("mongoose");
//const bodyparser = require("body-parser");
//const cookieParser = require("cookie-parser");
const fs = require("fs");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const path = require("path");
require("dotenv").config();

// local imports
const initializePassport = require("./passport-config");

//Get environment variables and explicitly declare variables
const port = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://Mosh:Mosh13909@cluster0.nocyv.mongodb.net/?retryWrites=true&w=majority';
const app = express();
const pathToKey = path.join(__dirname, "./cryptography/id_rsa_pub.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf-8");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// adding static files
app.use(express.static(path.join(__dirname,"..", "build")));
app.use(express.static("public"));

//to enable react routing
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// routing intergration
app.use(require("./routes"));

// setup session management to allow for a logged in user session to be maintained
app.use(
  session({
    secret: PUB_KEY,
    resave: true,
    saveUninitialized: false,
  })
);

// declare and initialize passport
app.use(passport.initialize());
app.use(passport.session());
initializePassport(passport);

//connect to database
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    err
      ? console.log(`There was an error: ${err.message}`)
      : console.log("Connected successfully to database!!");
  }
);

//maintain connection to the database
//mongoose.connection;

//start server
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});


