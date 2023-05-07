const fs = require('fs');
const file='video.mp4';


const readStream=fs.createReadStream(file)


const writeStream=fs.createWriteStream('copy.mp4')


readStream.pipe(writeStream);

writeStream.on('finish',()=>{
    console.log('New file created')
})
