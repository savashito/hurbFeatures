var __dirname = require('path').normalize(__dirname+'../../../');
// console.log('__dirname ',__dirname);
module.exports = {
	development:{
		db:"mongodb://localhost:27017/hurbfeatures",
		__dirname:__dirname,
		port: process.env.PORT || 3030
	},
	production:{
		db: 'mongodb://rodrigosavage:rtopdfrtio@ds053419.mongolab.com:53419/hurbfeature',
		// db:'mongodb://rodrigosavage:rtopdfrtio@ds063869.mongolab.com:63869/hurbfeatures',
		__dirname:__dirname,
		port: process.env.PORT || 80
	}
};