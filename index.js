const express = require('express');
require('./config');
const Building = require('./building');

const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = Building(req.body);
    let result = await data.save();
    console.log(req.body);
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await Building.find();
    resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await Building.deleteOne(req.params);
    resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await Building.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    resp.send(data);
})

app.listen(7500);