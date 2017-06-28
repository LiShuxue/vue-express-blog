var mongoose = require('mongoose');
var Promise = require('bluebird');
var db_config = require('./db_config');
mongoose.connect('mongodb://' + db_config.host + ':' + db_config.port + '/' + db_config.name);
mongoose.Promise = Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('MongoDB connected...')});

module.exports = db; 