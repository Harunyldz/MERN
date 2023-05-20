var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//MongoDB step01
const mongoose = require('mongoose');

//step02 connect to mongoDB
const mongoDBURL='mongodb+srv://hyildiz1217:gs36231445gs@dbcloud.3wq6lks.mongodb.net/';
const mongoDBName='schoolDB';

mongoose.connect(mongoDBURL+mongoDBName).then(()=>{
  console.log('MongoDB connected')
})
.catch(err =>{
  console.log('Connection Failed',err);
});


//Step03-1 Create a Collection(TABLE)-Schema
const Schema=mongoose.Schema;

const AlbumSchema=new Schema({
  userID:Number,
  id:Number,
  title:String
});

//step 03-2 create a model

const AlbumModel=mongoose.model('Album',AlbumSchema);

//step04 create a document/insert a record/add a data


const album=new AlbumModel({
  userID:1,
  id:1,
  title:'Yeni album'
});

album.save().then((data)=>{
console.log(data);
}).catch((err)=>{
  console.log(err);
})

//step05 Delete a document/data/record
AlbumModel.deleteOne({userID:'1'})

//************************** */
//Example CustomDB
// const mongoDBNameCustom='CustomDB';

// mongoose.connect(mongoDBURL+mongoDBNameCustom).then(()=>{
//   console.log('CustomDB Connected')
// })
// .catch((err)=>{
//   console.log('CustomDb connection failed',err)
// })


// const Schema=new Schema;

const albumCustom=new Schema({
  id:Number,
  title:String,
  name:String
})

const albumCustomModel=mongoose.model('Album2',albumCustom)

const album2=new albumCustomModel({
  id:20,
  title:'mongodb example',
  name:'New CustomDB'
})

album2.save().then((data)=>{
console.log(data)
}).catch(err=>{
  console.log(err)
})



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
