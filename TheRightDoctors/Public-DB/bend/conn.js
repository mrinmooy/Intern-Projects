const mongoose = require('mongoose')

const DB = "mongodb+srv://Mrinmoy:pAsSwOrD@cluster1.r9fgefd.mongodb.net/Public-Database?retryWrites=true&w=majority&appName=Cluster1";

mongoose.connect(DB,{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log(`connection succesfull`);
}).catch((err)=>console.log(`no connection`)); 