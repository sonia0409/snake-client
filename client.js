const { createConnection } = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`Successfully connected to game server`)
    //conn.write("Move: up")
  });
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(`from server: ${data}`)
    //conn.write("Move: up")
  });
  return conn;
};
module.exports = { connect };
