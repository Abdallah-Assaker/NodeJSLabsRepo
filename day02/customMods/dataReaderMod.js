const Emitter = require("events");
const util = require('util');

// class Logger {
//     constructor() { }
//     log(data) {
//         this.emit("log", data);
//     }
// }

function Logger () { }
util.inherits(Logger, Emitter);


// first method
// Logger.prototype.log = function (data) {
//     this.emit("log", data);
// }

// var logger = new Logger();
// logger.on("log", (data) => console.log(`received data : ${data}`));
// logger.log("test");


//2nd method
// Logger.prototype.on("log", (data) => console.log(`data: ${data}`));
// var logger = new Logger();
// logger.emit("log", "Verification Test of The DATA");

module.exports = Logger;