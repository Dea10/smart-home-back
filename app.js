const Server = require('./models/server');

require('dotenv').config();

const serverPort = process.env.SERVER_PORT;
const server = new Server(serverPort);
server.listen();
