var Transform = require('stream').Transform,
    stream = new Transform({decodeStrings: false, encoding: 'utf8'});

stream._transform = function(chunk, encoding, done) {
    this.push(chunk.toString().toUpperCase());
    done();
}

process.stdin
    .pipe(stream)
    .pipe(process.stdout);
