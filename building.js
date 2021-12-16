const mongoose = require('mongoose');
const buildingSchema = new mongoose.Schema({
    name:String,
    people:Number,
    status:String,
    type:String
});

module.exports = mongoose.model('buildings', buildingSchema);