module.exports =  reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }else if(req.query.age < 18){
        res.send(`${req.query.age} is underage`)
    }else{
        next();
    }
}