//import http server
const http = require('http');

//create a server object
const server = http.createServer((request, response) => {
    console.log('request received')
    // console.log('request URL=>',request.url)
    // console.log('request HEADERS=>',request.headers)
    //write response
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write("Hello World! <br/> This is my first <b>Node.js server</b> <h1>Merhaba Dünya</h1>");
    response.end("From end Method");
    //cevabın bittiğine dair
});


//Listen on port 3000
server.listen(3000);
