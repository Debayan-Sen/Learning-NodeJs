//middleware
const express = require('express');
const app = express();

const reqFilter_age = require('./middleware');          //seperate file middleware
const route = express.Router();
route.use(reqFilter_age);

const reqFilter = (req, res, next)=>{
    if(!req.query.city){
        res.send("please provide city")
    }else if(req.query.city != "kolkata"){
        res.send(`${req.query.city} city has no access`)
    }else{
        next();
    }
}

// app.use(reqFilter);     //application level middleware

app.get('/', (req,res)=>{
    res.send('welcome to home')
})

app.get('/user', reqFilter, (req, res)=>{       //single route middleware
    res.send('Welcome user!!')
})

app.get('/about', reqFilter, (req, res)=>{
    res.send('This is about page!!')
})

route.get('/contact', (req, res)=>{
    res.send('This is contact page!!')          //seperate file middleware
})

app.use('/', route);

app.listen(7521)