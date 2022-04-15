import app from './app';
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';
import sockets from './sockets';
import {connectDB} from './db';

connectDB();

//Levantar servidor http y socket
const server = http.createServer(app);
const httpServer = server.listen(3000)
const io = new WebsocketServer(httpServer);
sockets(io);

console.log("Server listen on port 3000");