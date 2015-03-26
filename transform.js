var through = require('through'),
    stream = through(function write(buf) {
                this.queue(buf.toString().toUpperCase());
            });

process.stdin
    .pipe(stream)
    .pipe(process.stdout);
