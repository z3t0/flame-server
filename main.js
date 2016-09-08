// Flame - Main
// Rafi Khan

// Require Modules
// Patch console with time stamp
require( "console-stamp" )( console, { pattern : "dd/mm/yyyy HH:MM:ss.l" } );
var create_server = require('./server.js')


// Server
var server = new create_server({port: 3000})

// Database
