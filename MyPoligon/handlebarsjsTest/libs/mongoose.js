var mongoose = require('mongoose');
var log = require('./log')(module);

mongoose.connect('mongodb://localhost/handlebarsjsTest');
var db = mongoose.connection;

db.on('error', function (err) {
  log.error('connection error:', err.message);
});
db.once('open', function callback() {
  log.info("Connected to DB!");
});

var Schema = mongoose.Schema;

var Posts = new Schema({
  //_id: {type: Object, required: true},
  //id: {type: String, required: true},
  title: {type: String, required: true},
  body: {type: String, required: true}
});

var PostsModel = mongoose.model('Posts', Posts);

module.exports.PostsModel = PostsModel;