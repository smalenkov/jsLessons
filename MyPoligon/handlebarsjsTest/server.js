var express = require('express');
var path = require('path'); // модуль для парсинга пути
var log = require('./libs/log')(module);
var PostsModel = require('./libs/mongoose').PostsModel;
var app = express();

// app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
// app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
// app.use(express.bodyParser()); // стандартный модуль, для парсинга JSON в запросах
// app.use(express.methodOverride()); // поддержка put и delete
// app.use(app.router); // модуль для простого задания обработчиков путей
// app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

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

app.get('/api/posts', function(req, res) {
  return PostsModel.find(function (err, posts) {
    if (!err) {
      res.statusCode = 200;
      return res.send(posts[0]);
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

