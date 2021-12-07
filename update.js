const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();
    const result = await data.updateOne(
        {name:'Big Bazzar'},{
            $set:{name:'BigBazzar',people:1200}
        }
    )
    console.warn(result);
}

updateData();