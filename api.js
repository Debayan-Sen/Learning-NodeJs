const express =require('express');
const dbConnect = require('./mongodb');
const app =  express();

//get api
app.get('/', async (req, resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data); 
    resp.send(data);
});

//post api
app.use(express.json());

app.post('/', async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
});


//put api
// app.put("/", async (req,resp)=>{
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name:req.body.name},
//         {$set: req.body}
//     )
//     resp.send({result:"update"})
// })

app.put("/:name", async (req,resp)=>{        //update unique value with query params
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.params.name},
        {$set: req.body}
    )
    resp.send({result:"update"})
})

//delete api
const mongodb = require('mongodb');
app.delete('/:id',async (req, resp)=>{
    let data = await dbConnect();
    const result = data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    resp.send("data deleted!!");
})

app.listen(7521);