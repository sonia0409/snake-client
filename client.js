const { createConnection } = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`Successfully connected to game server`);
    conn.write("Name: SS");
    conn.write("Say: Hello");
  });
  conn.on("data", (data) => {
    // code prints out the data, obtined from server when the connection is first established
    console.log(`from server: ${data}`);
  });
  return conn;
};
module.exports = { connect };
