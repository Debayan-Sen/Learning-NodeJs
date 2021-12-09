// const { response } = require('express');
// const {MongoClient} = require('mongodb');
// // const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'city';

// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('Building');   //returns promise
//     // let response = await collection.find({}).toArray();
//     // console.log(response);
// }


//database connection in another file
const dbConnect = require('./mongodb')

// dbConnect().then((resp)=>{
//     // console.warn(resp.find().toArray())     //returns promise
//     resp.find({color:'red'}).toArray().then((data)=>{
//         console.warn(data);
//     });
// });


const main = async ()=>{
    let data = await dbConnect();
    data = await data.find({name:'vishal'}).toArray();
    console.warn(data);
}

main();