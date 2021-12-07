const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    let data = await dbConnect();
    
    //delete one data
    // const result = await data.deleteOne({name: 'fbb'})
    // console.warn(result);

    //delete many data
    const result = await data.deleteMany({name:'fbb'});
    console.warn(result);

    if (result.deletedCount!=0) {
        console.log("data Deleted!!")
    }else{
        console.log("data not present!")
    }
}

deleteData();