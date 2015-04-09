var express = require('express'),
	bodyParser = require('body-parser'),
	logger  = require('morgan');

var err404 = function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
};

module.exports = function(config){
	var app = express();
	var __dirname = config.__dirname;
	var staticFolder = __dirname+'public';
	console.log('serving static files '+staticFolder);
	app.use(express.static(staticFolder));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(logger('dev'));
	app.enable('verbose errors');
	app.__dirname = __dirname;
	// console.log('dir '+express.static(__dirname+'/../../public/views/main.html'));
	// set server side views
	// automatically serves index.jade
	app.set('views',__dirname + 'server');
	app.set('view engine','jade');
	// app.use(err404);
	return app;
};

