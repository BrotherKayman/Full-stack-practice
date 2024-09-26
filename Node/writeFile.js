var fs = require('fs');
 fs.writeFile('myFile.txt', 'Dumelang Lefatshe!', function(err) {
    if (err) {
      console.error("Failed to write file: ", err.message);
      return;
    }
    console.log('Saved!');
 });