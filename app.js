const http = require('http');

const routes =require('./routes');
const server = http.createServer(routes.Handler);

console.log(routes.someText);

server.listen(3000);


