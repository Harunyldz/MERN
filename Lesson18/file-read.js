//File System Library
const fs = require('fs')

// //read file
// fs.readFile('demo.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//     console.log('End of the File Read')
// });

// //read file synchronously
// const data=fs.readFileSync('demo.txt');
// console.log(data.toString());
// console.log('End of the File Read')



//create & write file
// fs.writeFile  fs.appendFile


//fs.appendFileSync
// fs.appendFile('demo2.txt','hello World!',(err)=>{
//     if(err) throw err;
//     console.log('File Created');
// })

//fs.writeFileSync
// fs.writeFile('demo2.txt','hello World!',(err)=>{
//     if(err) throw err;
//     console.log('File Created');
// })


//Remove File
//fs.unlink   fs.unlinkSync

fs.unlink('demo2.txt',(err)=>{
    if(err) throw err;
    console.log('File Deleted')
})