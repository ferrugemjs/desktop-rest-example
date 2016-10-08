var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs")); //This is most convenient way if it works for you
var directory = "example";

fs.readdirAsync(directory).map(function (filename) {
    //return fs.readFileAsync(directory + "/" + filename, "utf8");
    console.log(filename);
    return filename;
    //return fs.readFileAsync(directory + "/" + filename, "utf8");
}).then(function (content) {
    console.log("so this is what we got: ", content)
});
