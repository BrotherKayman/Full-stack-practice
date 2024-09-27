var fs = require('fs');

fs.open('newFiled.txt', 'w', function(err, fd) {
    if (err) {
        console.error('Error opening file: ', err);
        return;
    }
    console.log('Opened successfully!');
    fs.close(fd, (err) => {
        if (err) {
            console.error("Couldn't close file: ", err);
        }
    });
});