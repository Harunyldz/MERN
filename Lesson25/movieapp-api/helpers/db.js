const mongoose=require('mongoose')

const mongoDBURL='mongodb+srv://hyildiz1217:gs36231445gs@dbcloud.3wq6lks.mongodb.net/';
const mongoDBName='MovieAppDB';
const connection=mongoose.connect(mongoDBURL+mongoDBName);
connection.then((db)=>{
    console.log('connected to mongoDB');
}).catch((err)=>{
    console.log('MongoDB conenction errror: ',err)
})


module.exports=connection;