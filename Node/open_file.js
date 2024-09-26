var fs = require('fs');

fs.open('newFile.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});