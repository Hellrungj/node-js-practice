// Tutorial Link - https://www.w3schools.com/nodejs/nodejs_filesystem.asp

var os = require('os');
var http = require('http');
var fs = require("fs")

function getWorkSpaceName(data) {
	var workspacename="";
	for (var x = 0; x < data.length; x++) {
		if (x != 0 && x != (data.length-1)) {
			workspacename += data[x]+"-";
		};
	};
	return workspacename;
};

var userdata = os.hostname();
var data = userdata.split("-");

var username = data[0];
var workspacename = getWorkSpaceName(data); 
var end = '.c9users.io';
var str = 'Listening on port https://'+workspacename+username+end;

//create a server object:
http.createServer(function (req, res) {
  fs.readFile('HTML/test.html', function(err, data) {
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	res.write(data);
  });
}).listen(8080, function () {
  console.log(str);
});
