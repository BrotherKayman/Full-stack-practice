var fs = require('fs');

fs.appendFile('myFile.txt', 'Dumelang Lefatshe!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});