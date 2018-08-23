var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var TodoSchema = new Schema({
//  point: Number,
  text:  String
});
mongoose.model('todo', TodoSchema);
mongoose.connect('mongodb://localhost/testdb');

var Todo = mongoose.model('todo');

Todo.remove({}, function(err) {
 if (err) { console.log(err); }
});

