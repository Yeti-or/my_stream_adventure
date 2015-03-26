var Writable = require('stream').Writable,
    concat = new Writable();

concat._buffer = '';
concat._write = function(chunk, encoding, next) {
    this._buffer += chunk;
    next();
};

concat.on('finish', function() {
    process.stdout.end(this._buffer.toString().split('').reverse().join(''));
});

process.stdin
    .pipe(concat)
