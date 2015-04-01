var mongoose	= require('mongoose');


// schemas
var msgSchema = mongoose.Schema({
	msg: String
});
msgSchema.methods.speak = function () {
	console.log('soy '+this.msg);
};
var Msg = mongoose.model('Message', msgSchema);

module.exports = function(config){
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error',function(err){
		console.log('Error with db ',err);
		console.log('Tried to connect ',config.db);
		config.db
	});

	db.once('open',function(){
		console.log('Conecto satisfactoriamente');
		var msg = new Msg({msg:'te queirooo'});
		msg.save(function (err, msg) {
			if (err) return console.error(err);
			msg.speak();
		});

		Msg.find(function (err, msgs) {
			if (err) return console.error(err);
			console.log(msgs);
		});
	});



	
};