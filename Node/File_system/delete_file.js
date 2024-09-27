var fs = require('fs');

fs.unlink('newFiled.txt', function(err) {
    if (err) {
        console.error("Failed to delete: ", err.message)
        return;
    }
    console.log("File successfully deleted!");
});