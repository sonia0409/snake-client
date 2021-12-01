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
    conn.write("Name: SS")
  });
  conn.on("data", (data) => {
    // code prints out the data, obtined from server when the connection is first established
    console.log(`from server: ${data}`)
  });
  return conn;
};
module.exports = { connect };
