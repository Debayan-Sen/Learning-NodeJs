const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    
    //insert one data
    // const result = await db.insertOne(
    //     {name:'fbb', people:500, color:'pink'}
    //     );

    //insert many data
    const result = await db.insertMany(
        [
            {name:'max', people:500, color:'pink'},
            {name:'e-mall', people:700, color:'white'},
            {name:'kolkata mart', people:460, color:'brown'}
        ]
        );

    if(result.acknowledged){
        console.log('data inserted!!');
    }
}

insert();