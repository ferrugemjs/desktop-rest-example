var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs")); //This is most convenient way if it works for you

exports.route = function(req, res, next){	
	var directory = req.params.directory;
	fs.readdirAsync(directory).map(function (filename) {
		return {name:filename,path:directory+"/"+filename};
	}).then(function (content) {
		res.send(content.filter(function(fileobj){
			return fileobj.name.indexOf(".") < 0;
		}));
		next();
	});
}


