const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log('Request Url: ', req.url);
    console.log('Request Method', req.method);

    if (req.method === 'GET') {
        if (req.url === '/') { res.write('<h1>Home Page</h1>') }
   
    else if (req.url === '/About') {
        res.write('<h1>About Page</h1>');
    }
    else{
        res.write('<h1>404 Page Not Found</h1>')
    }
}
});

server.listen(3000, () => { console.log('Server is running...') });