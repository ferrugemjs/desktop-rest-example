var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs")); //This is most convenient way if it works for you
//var path = require("path");

exports.route = function(req, res, next){	
	var directory = req.params.directory;
	fs.readdirAsync(directory).map(function (filename) {
		var extension = "";
		if(filename.indexOf(".")>-1){
			extension = filename.substring(filename.lastIndexOf(".")+1,filename.length);
		};
		return {name:filename,path:directory+"/"+filename,extension:extension};
	}).then(function (content) {
		res.send(content.filter(function(fileobj){
			return fileobj.name.indexOf(".") > -1;
		}));
		next();
	});
}


