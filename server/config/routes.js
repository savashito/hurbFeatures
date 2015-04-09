module.exports = function(app)
{
	// handle partials with jade
	app.get('/partials/*',function(req,res){
		// var partial = '../public/app/' + req.params[0];
		var partial = './partials/' + req.params[0];
		console.log('renderenando part ',partial);
		res.render(partial);
	});
	app.get('/api/jobs',function(req,res){
		res.send('Test');
	});

	// app.get('partials/')
	/*
	// handle partials with jade
	app.get('/vendor/*',function(req,res){
		var partial = '../../bower_components/' + req.params[0];
		console.log('renderenando part ',partial);
		res.send(partial);
	});
	*/
	// all request are handle by this
	app.get('*',function (req,res){
		console.log('renderiando index ',req.user);
		var dir = app.__dirname+'public/views/main.html';
		console.log(dir);
		res.sendFile(dir);
		//res.render('index');
	});


};