var mongoose = require('mongoose);

mongoose.connect('mongodb://lolcahost/test', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.onec('open', function(){
    var characterSchema = new mongoose.Schema({
        name: String
    });
    var character = mongoose.model('character', characterSchema);

    var ironMan = new character({name:"ironMan"});
    console.log(ironMan);
});