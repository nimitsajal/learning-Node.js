// LEARNING BASICS OF NODE JS

// differences between node.js and vanilla.js:

// [1] node.js runs directly on a server as backend / any conputer rather than on a website as a frontend.
// console.log("Hello World!")

// [2] node.js console can directly run on terminal.
//      type "node" in terminal to start the node.js console, "ctrl+c" 2 times to close

// [3] node.js have global variable rather than window variable.
// console.log(global)

// [4] node.js have common core modules related to OS and File System of the server and vanilla.js does not have any such moules.

const os = require("os")
const path = require("path")

// OS related module
console.log("os.type: " + os.type())
console.log("os.version: " + os.version())
console.log("os.homedir: " + os.homedir())

// File System related module
console.log("__dirname: " + __dirname)
console.log("__filename: " + __filename)
console.log("path.dirname(__fielname): " + path.dirname(__filename))
console.log("path.basename(__fielname): " + path.basename(__filename))
console.log("path.extname(__fielname): " + path.extname(__filename))
console.log("path.parse(__fielname): ")
console.log(path.parse(__filename))

// [5] node.js have common JS modules compared to ES6 modules.

// [6] node.js is missing some JS APIs like Fetch (but we can always just use packages).

// -----------------------------------------------------------

// importing local custom modules: math.js

const math = require("./math")
// const { add, subtract, multiply, divide } = require("./math")

console.log("3 + 2 = " + math.add(3, 2))
console.log("3 - 2 = " + math.subtract(3, 2))
console.log("3 * 2 = " + math.multiply(3, 2))
console.log("3 / 2 = " + math.divide(3, 2))
