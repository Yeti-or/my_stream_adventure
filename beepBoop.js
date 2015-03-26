console.log('beep boop');

    var through = require('through');
    var tr = through(write, end);
    tr.write('beep\n');
    tr.write('boop\n');
    tr.end();
    
    function write (buf) { console.dir(buf) }
    function end () { console.log('__END__') }
