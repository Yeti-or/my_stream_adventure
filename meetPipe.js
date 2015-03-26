var file = process.argv[2],
    fs = require('fs'),
    fileStream = file && fs.createReadStream(file);

fileStream && fileStream.pipe(process.stdout);
