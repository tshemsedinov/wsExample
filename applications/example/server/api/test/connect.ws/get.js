module.exports = function(client, callback) {
  var connection = client.websocket.accept();
  if (connection) {
    client.eventChannel = 'test';
    client.heartbeat = true;
    connection.send('Hello world');
    var counter = 0;
    connection.on('message', function(/*message*/) {
      connection.send('I am here! Counter: ' + counter++);
    });
    //connection.on('close', function(reasonCode, description) {
    //  console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    //});
  }
  callback();
};
