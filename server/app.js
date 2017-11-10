var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');

let books = require('./data/books');
let bookList = books.books;
let users = require('./data/users');
let userList = users.users;
let bucket = require('./data/buckets');
let BucketItem = bucket.BucketItem;

var app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//Obtenir la liste de tous les livres
app.get('/books', function(req,res){
    res.send(bookList);
});

//Obtenir les informations sur un livre en particulier
app.get('/books/:id', function(req,res){
    let myBook = bookList.find(x =>x.id === parseInt(req.params['id']));
    if(myBook === undefined) {
        res.status(404);
        res.send('Book with id ' + req.params['id'] + ' not found');
    }
    else res.send(myBook);
});

//Obtenir son panier d'achats
app.get('/users/:userId/bucket',function(req, res){
    //Seul l'usager peut obtenir son panier
    let user = userList.find(x =>x.id === parseInt(req.params['userId']));
    if(user !== undefined){
        if(user.connected && user.currentKey === req.query.key){
            res.send(user.bucket);
        }
        else{
            res.status(401);
            res.send('You are not authorized to access this bucket');
        }
    }
    else{
        res.status(404);
        res.send('User not found');
    }
});

//Ajouter un livre à son panier d'achats
app.post('/users/:userId/bucket',function(req, res){
    let user = userList.find(x =>x.id === parseInt(req.params['userId']));
    if(user !== undefined){
        if(user.connected && user.currentKey === req.query.key){
            let book = bookList.find(x => x.id === parseInt(req.body.bookId));
            if(book !== undefined) {
                user.bucket.push(new BucketItem(book));
                res.send(user.bucket);
            }
            else{
                res.status(404);
                res.send('Book not found');
            }
        }
        else{
            res.status(401);
            res.send('You are not authorized to access this bucket');
        }
    }
    else{
        res.status(404);
        res.send('User not found');
    }
});

//Retirer un livre de son panier d'achats
app.delete('/users/:userId/bucket/:bucketItemId', function(req,res){
    let user = userList.find(x =>x.id === parseInt(req.params['userId']));
    if(user !== undefined){
        if(user.connected && user.currentKey === req.query.key){
            user.bucket = user.bucket.filter(x => x.id !==parseInt(req.params['bucketItemId']));
            res.send(user.bucket);
        }
        else{
            res.status(401);
            res.send('You are not authorized to access this bucket');
        }
    }
    else{
        res.status(404);
        res.send('User not found');
    }
});

//Se connecter
app.get('/users/connect', function(req,res){
    let user = userList.find(x =>x.email === req.query.email);
    if(user !== undefined){
        if(user.cryptedPassword === req.query.cryptedPassword){
            user.connect();
            res.send(user);
        }
        else{
            res.status(401);
            res.send('Connection failed');
        }
    }
    else{
        res.status(404);
        res.send('User \'' + req.query.email+'\' not found');
    }
});

//Se déconnecter
app.get('/users/:userId/disconnect', function(req,res){
    let user = userList.find(x =>x.id === parseInt(req.params['userId']));
    if(user !== undefined){
        if(user.currentKey === req.query.key){
            user.disconnect();
            res.send(user);
        }
        else{
            res.status(401);
            res.send('Disconnection failed');
        }
    }
    else{
        res.status(404);
        res.send('User not found');
    }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
