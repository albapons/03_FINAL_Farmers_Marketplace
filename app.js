var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/api/index");
var usersRouter = require("./routes/api/users");
var marketsRouter = require("./routes/api/markets");
var productsRouter = require("./routes/api/products");
var suppliersRouter = require("./routes/api/suppliers");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/client/build")));

app.use("api/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/markets", marketsRouter);
app.use("/api/products", productsRouter);
app.use("/api/suppliers", suppliersRouter);

app.get("*", (req, res) => {
  res.sendFiles(path.join(__dirname + "/client/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
