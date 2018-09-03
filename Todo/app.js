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
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// MongoDB
var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
	text: String
});
mongoose.model('todo', TodoSchema);
mongoose.connect('mongodb://localhost/testdb');
var Todo=mongoose.model('todo');

//ƒŠƒXƒg‚ğæ“¾‚·‚éAPI
app.get('/list',function(req,res,next){
	Todo.find({},function(err,docs){
		res.json(docs);
			if(err){console.log(err);}
	});
});

//‚P€–Ú’Ç‰Á‚·‚éAPI
app.post('/add',function(req,res){
	var todo0=new Todo();
	todo0.text=req.body.text; 
	todo0.save(function(err){
		if(err){condole.log(err);}
	});
	res.send(true);
});

//‚P€–Úíœ‚·‚éAPI
app.post('/del',function(req,res){
	var id=req.body.id;
	if(id){
		Todo.remove({'_id':id},function(err){
			if(err){condole.log(err);}
		});
	}
	res.send(true);
});

//‚P€–Ú•ÏX‚·‚éAPI
app.post('/update',function(req,res){
	var id=req.body.id;
	var text=req.body.text;
	if((id)&&(text)){ 
		Todo.update({'_id':id},{$set:{'text':text}},function(err){
			if(err){condole.log(err);}
		});
	}
	res.send(true);
});


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
