const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/city");

const BuildingSchema = new mongoose.Schema({
    name:String,
    people:Number,
    type:String,
    status:String
});

const saveInDB = async ()=>{
    const Building = mongoose.model('buildings', BuildingSchema);
    let data = new Building({
        name:"Aircel",
        people:120,
        status:"closed",
        type:"office"
    });
    let result = await data.save();
    console.log(result);
}

const updateInDB = async ()=>{
    const Building = mongoose.model('buildings', BuildingSchema);
    let data = await Building.updateOne(
        {name:"IDEA"},{
            $set:{
                name:"VI",
                people:1290,
                status:"open"
            }
        }
    )
    console.log(data);
}

const deleteInDB = async ()=>{
    const Building = mongoose.model('buildings', BuildingSchema);
    let data = await Building.deleteOne({name:"Vodafone"});
    console.log(data);
    if(data.deletedCount==1){
        console.log("data deleted!!");
    }else{
        console.log("data not present!!");
    }
}

const findInDB = async ()=>{
    const Building = mongoose.model('buildings', BuildingSchema);
    let data = await Building.find({name:"VI"});
    console.log(data);
}

findInDB();
// deleteInDB();
// saveInDB();
// updateInDB();