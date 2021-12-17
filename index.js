const express = require('express');
require('./config');
const Building = require('./building');

const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {
    console.log(req.params.key);
    let data = await Building.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"type":{$regex:req.params.key}}
        ]
    });
    res.send("search for " + req.params.key + "\n" + data);
})

app.listen(7500);