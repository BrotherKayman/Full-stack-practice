var http = require('http');
var formidable = require('formidable');

// Create an HTTP server
http.createServer(function (req, res) {
    // Display the upload form when the user accesses the root
    if (req.url == '/' && req.method.toLowerCase() == 'get') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
    // Handle the file upload when the form is submitted
    else if (req.url == '/fileupload' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        
        // Parse the uploaded file
        form.parse(req, function (err, fields, files) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('File upload error');
                return res.end();
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('File uploaded successfully');
            return res.end();
        });
    }
    // Handle other routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        return res.end();
    }
}).listen(8080);
