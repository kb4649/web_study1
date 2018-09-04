var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var TodoSchema = new Schema({
  uid: Number,
  text:  String
});
mongoose.model('todo', TodoSchema);
mongoose.connect('mongodb://localhost/testdb');

var Todo = mongoose.model('todo');

for (var i=0; i<5; ++i) {
	var todo0 = new Todo();
	todo0.uid  = 101;
	todo0.text  = 'todo_sample'+i;
	todo0.save(function(err) {
	  if (err) { console.log(err); }
	});
}
