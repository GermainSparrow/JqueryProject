require('./routes/mongodbConnect.js')
//注册关系
require('./routes/dataBase/types.js')
require('./routes/dataBase/points')
require('./routes/dataBase/students')
require('./routes/dataBase/exercises.js')
require('./routes/dataBase/collections.js')

require('./routes/dataBase/errors')

require('./routes/dataBase/tests.js')
require('./routes/dataBase/testeds.js')

require('./routes/utils/test.js')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 引入个人中心路由
let user = require('./routes/user')
app.use('/user',user)
//引入考试路由
let exercise = require('./routes/exercises');
app.use('/exercises',exercise)
//引入测试路由 
let tests = require('./routes/test');
app.use('/test',tests)
//引入错误路由
let errors = require('./routes/errors')
app.use('/errors',errors)
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
//git test
module.exports = app;
app.listen(3001,function(){console.log('3001端口已经启动');})
