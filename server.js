var env_		= process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config_		= require('./server/config/config')[env_];
var app_		= require('./server/config/express')(config_);
var mongo		= require('./server/config/mongo')(config_);
// configure the routes for the app
var routes		= require('./server/config/routes')(app_);

app_.listen(config_.port);



// var msg