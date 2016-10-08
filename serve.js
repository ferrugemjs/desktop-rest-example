var restify = require('restify');

var filelist = require('./file-list');
var folderlist = require('./folder-list');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});


server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS({
    origins: ['*']
}));

server.get('/rest/file', filelist.route);
server.get('/rest/folder', folderlist.route);

server.listen(8330, function () {
  console.log('%s listening at %s', server.name, server.url);
});

exports.server = server;
