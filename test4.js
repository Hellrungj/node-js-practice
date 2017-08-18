var os = require('os');
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

function getWorkSpaceName(data) {
	var workspacename="";
	for (var x = 0; x < data.length; x++) {
		if (x != 0 && x != (data.length-1)) {
			workspacename += data[x]+"-";
		};
	};
	return workspacename;
};
// Tutorial Link - // Tutorial Link - https://www.w3schools.com/nodejs/nodejs_filesystem.asp

var userdata = os.hostname();
var data = userdata.split("-");

var username = data[0];
var workspacename = getWorkSpaceName(data); 
var end = '.c9users.io';
var str = 'Listening on port https://'+workspacename+username+end;

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/ubuntu/workspace/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      	});
		});
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080, function () {
  console.log(str);
});