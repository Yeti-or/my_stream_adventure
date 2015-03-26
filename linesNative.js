var Transform = require('stream').Transform,
    split = new Transform(),
    odd = true,
    stream = new Transform({decodeStrings: false});

split._buffer = '';
split._transform = function(chunk, encoding, next) {
    this._buffer += chunk.toString();
    var lines = this._buffer.split(/\r?\n/);
    this._buffer = lines.pop();

    lines.forEach(function(line) {
        this.push(line||'\r');
    }, this);

    next();
}
split._flush = function(done) {
    this.push(this._buffer||'\r');
    done();
}
split.setEncoding('utf8');

stream._transform = function(chunk, encoding, next) {
    this.push(((odd = !odd) ? chunk.toUpperCase() : chunk.toLowerCase()) + '\n');
    next();
}

process.stdin
    .pipe(split)
    .pipe(stream)
    .pipe(process.stdout);
