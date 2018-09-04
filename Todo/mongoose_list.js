var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var TodoSchema = new Schema({
  uid: Number,
  text:  String
});
mongoose.model('todo', TodoSchema);
mongoose.connect('mongodb://localhost/testdb');

var Todo = mongoose.model('todo');

Todo.find({}, function(err, docs) {
  for (var i=0; i<docs.length; ++i) {
    console.log(docs[i]);
  }
  if (err) { console.log(err); }
});

