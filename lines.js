var through = require('through'),
    split = require('split'),
    odd = true,
    stream = through(function write(buf) {
                //console.log((odd = !odd) ? buf.toUpperCase() : buf.toLowerCase());
                this.queue(((odd = !odd) ? buf.toUpperCase() : buf.toLowerCase()) + '\n');
            });

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout);
