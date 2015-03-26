var concat = require('concat-stream');

process.stdin
    .pipe(concat(function(data) {
        process.stdout.end(data.toString().split('').reverse().join(''));
    }))
