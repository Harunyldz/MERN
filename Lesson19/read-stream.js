const fs = require('fs')
const file='video.mp4';

//step01 create a read stream
const readStream = fs.createReadStream(file)

let counter=0;

//step02 
readStream.on('data', (chunk)=>{
    console.log(counter++,'.little chunk. Size: ', chunk.length, 'bytes\n')
   
})

readStream.on('end',()=>{
    console.log('End of stream')
})