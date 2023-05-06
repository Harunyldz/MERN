const http = require('http');
const fs= require('fs');

const myServer= http.createServer((req,res)=>{
    console.log('request was made :'+req.url)

    res.writeHead(200,{'Content-Type':'text/html'});

    fs.readFile('index.html',(err,data)=>{
        if(err) throw err
        res.end(data);
    });
// res.end('Hey ninjas');
})

myServer.listen(3000);
