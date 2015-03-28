var trumpet = require('trumpet'),
    upperCaser = require('stream').Transform(),
    tr = trumpet()

upperCaser._transform = function (chunk, encodung, done) {
    this.push(chunk.toString().toUpperCase())
    done()
}

var loud = tr.select('.loud').createStream()
loud
    .pipe(upperCaser)
    .pipe(loud)

process.stdin
    .pipe(tr)
    .pipe(process.stdout)



