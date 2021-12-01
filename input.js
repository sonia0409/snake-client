//const { stdout } = require("process");
//const { connect } = require("./client");

// Stores the active TCP connection object.
//let connection;
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  //connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(data) {
    // assigning function to each key
    const obj = {
      w: "Move: up",
      a: "Move: left",
      s: "Move: down",
      d: "Move: right",
    };
    if (data === 'w' || data === 'a' || data === 's' || data === 'd') {
      conn.write(obj[data]);
    }

    if (data === '\u0003') {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = { setupInput };
