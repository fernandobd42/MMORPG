// importar o mongodb
var mongo = require('mongodb');

var connMongodb = function(){
    var db = new mongo.Db(
        'mmorpg',
        new mongo.Server(
            'localhost', // endereço do servidor
            '27017', // porta de conexão
            {}
        ),
        {}
    );

    return db;
}
module.exports = function(){
    return connMongodb;
}
