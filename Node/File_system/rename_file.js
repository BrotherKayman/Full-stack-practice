var fs = require('fs');

fs.rename('file1', 'file1.txt', function(err) {
    if (err) {
        console.error("Failed to rename file: ", err.message);
        return;
    }
    console.log('Success!');
    
});