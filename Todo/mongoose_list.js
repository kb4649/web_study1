var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var TodoSchema = new Schema({
//  point: Number,
  text:  String
});
mongoose.model('todo', TodoSchema);
mongoose.connect('mongodb://localhost/testdb');

var Todo = mongoose.model('todo');

/*
Todo.remove({}, function(err) {
 if (err) { console.log(err); }
});

for (var i=0; i<5; ++i) {
	var todo0 = new Todo();
	todo0.text  = 'todo_sample'+i;
//	todo0.point = 777;
	todo0.save(function(err) {
	  if (err) { console.log(err); }
	});
}
//直ぐには更新されない
*/
Todo.find({}, function(err, docs) {
  for (var i=0; i<docs.length; ++i) {
    console.log(docs[i]);
  }
  if (err) { console.log(err); }
});

