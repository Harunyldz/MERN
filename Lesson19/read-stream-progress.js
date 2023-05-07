const fs = require('fs')
const file='video.mp4';

//step01 create a read stream
const readStream = fs.createReadStream(file)

let counter=0;
let progress=0;

fs.stat(file,(err,data)=>{
    const total=data.size
    readStream.on('data', (chunk)=>{
        // console.log(counter++,'.little chunk. Size: ', chunk.length, 'bytes\n')
        progress+=chunk.length
        console.log(Math.round((100*progress)/total)+'%')
    })
})