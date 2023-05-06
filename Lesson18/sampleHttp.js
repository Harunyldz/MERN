const http =require('http');

const serverSample=http.createServer((request,response)=>{
    console.log("Sample.js server");
    response.write("Sample.js server");
    response.end();
})

serverSample.listen(3000);