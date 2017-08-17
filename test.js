var os = require("os")
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

function getWorkSpaceName(data) {
	//console.log("Testing");
	//console.log("Data " + data);
	var workspacename="";
	for (var x = 0; x < data.length; x++) {
		//console.log("X: "+ x);
		if (x != 0 && x != (data.length-1)) {
			//console.log("Selected: " + data[x]);
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

app.listen(8080, function () {
  console.log(str);
  //call this app from https://<workspace name>-<user name>.c9users.io
  //https://node-js-practice-hellrungj.c9users.io
});