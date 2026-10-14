var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

var expressLayouts = require("express-ejs-layouts");
var { connectDB } = require("./config/db");
var authRouter = require("./routes/auth.route");
var pagesRouter = require("./routes/pages.route");
var bookRouter = require("./routes/book.route");
var studentRouter = require("./routes/student.route");
var issueRouter = require("./routes/issue.route");
var passport = require("./config/passport");

var app = express();

require("./models");
connectDB();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/assets", express.static(path.join(__dirname, "html", "assets")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());

app.use("/", authRouter);
app.use("/api/books", bookRouter);
app.use("/api/students", studentRouter);
app.use("/api/issues", issueRouter);
app.use("/", pagesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error", { layout: false });
});

module.exports = app;
