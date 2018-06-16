const http = require('http');
const config = require('./config.js');
const app = require('./app');

function listeningReporter () {
  const { address, port } = this.address();
  const protocol = this.addContext ? 'https' : 'http';
  console.log(`Listening on ${protocol}://${address}:${port}...`);
}

const httpServer = http.createServer(app.callback())
  .listen(config.HTTP_PORT, config.HOST, listeningReporter)
