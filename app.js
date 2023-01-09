var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuariosRegistrados');
const loginRouter = require('./routes/login'); 
const signupRouter = require('./routes/signup');
const aboutRouter = require('./routes/about'); 
const contactarRouter = require('./routes/contactar'); 
const mapaRouter = require('./routes/mapa'); 
const perfilUsuarioRouter = require('./routes/perfilUsuario'); 

var flash = require('connect-flash'); //p
const passport = require("./passport/setup"); //p
const session = require("express-session");  //p
const MongoStore = require("connect-mongo")(session); //p

var app = express();


//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1:27017/apedales';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Express Session
app.use(   
  session({
      secret: "very secret this is",
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Passport middleware
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/about", aboutRouter);
app.use("/contactar", contactarRouter);
app.use("/mapa", mapaRouter);
app.use("/perfilUsuario", perfilUsuarioRouter);

// Passport middleware
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(flash());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
