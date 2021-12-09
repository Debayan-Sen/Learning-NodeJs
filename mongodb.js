const { response } = require('express');
const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'city';

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('Building');   //returns promise
}

module.exports = dbConnect;