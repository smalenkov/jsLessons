var express = require('express');
var path = require('path'); // модуль для парсинга пути
var cors = require('cors'); // модуль CORS спецификации для кросс-доменных запросов
var log = require('./libs/log')(module);
var PostsModel = require('./libs/mongoose').PostsModel;
var app = express();

app.listen(1337, function(){
  console.log('Express server listening on port 1337');
});


app.get('/', function(req, res) {
  res.send('Star express!');
});

app.get('/hello', function(req, res) {
  res.send('Hello world!');
});

app.get('/api', function (req, res) {
  res.send('API is running');
});

app.get('/api/posts', cors(), function(req, res) {
  return PostsModel.find(function (err, posts) {
    if (!err) {
      res.statusCode = 200;
      return res.json(posts[0]);
    } else {
      res.statusCode = 500;
      log.error('Internal error(%d): %s',res.statusCode,err.message);
      return res.send({ error: 'Server error' });
    }
  });
});

app.get('/api/posts/:id', cors(), function(req, res) {
    return PostsModel.findById(req.params.id, function (err, posts) {
        if(!posts) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        if (!err) {
            return res.json(posts);
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});

app.get('/api/post', cors(), function(req, res) {
  return PostsModel.find({posts: {title: 'Снег'}}, function (err, posts) {
    if (!err) {
      res.statusCode = 200;
      return res.json(posts);
    } else {
      res.statusCode = 500;
      log.error('Internal error(%d): %s',res.statusCode,err.message);
      return res.send({ error: 'Server error' });
    }
  });
});


app.get('/ErrorExample', function(req, res, next){
  next(new Error('Random error!'));
});


// Обрабатываем ошибки  и выводим в консоль

app.use(function(req, res, next){
  res.status(404);
  log.debug('Not found URL: %s',req.url);
  res.send({ error: 'Not found' });
  return;
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  log.error('Internal error(%d): %s',res.statusCode,err.message);
  res.send({ error: err.message });
  return;
});

