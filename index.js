// const fs = require('fs');
// fs.writeFileSync("Hello.txt","Hi from my side!!");
// const gs = require('fs').writeFileSync;
// gs("Hello2.txt","WOW!!");
// console.log("-->>",__dirname);
// console.log("-->>",__filename);


// //creating server
// const http = require('http');
//     //arrow function
//     function test(a){
//         return a*100;
//     }
//     //
//     const test = (a) => a*100;

// const contentHere = (req, res) => {
//     res.write("<h1>Hello, from Debayan!!</h1>");
//     res.end();
// }

// http.createServer(contentHere).listen(7530);
// // http.createServer((req, res) =>{
// //     res.write("<h1>Hello from Debayan!!</h1>");
// //     res.end();
// // }).listen(7530);

// //using package
// const colours = require('colors');
// console.log("using package".blue);


// // creating a simple API
// const http = require('http');
// const data = require('./data.js')
// http.createServer((req,resp) => {
//     resp.writeHead(200, {'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(7520);


// // getting input from command line
// const fs = require('fs');
// const input = process.argv;
// if(input[2]=="add"){
//     fs.writeFileSync(input[3], input[4]);

// }else if (input[2]=="remove") {
//     fs.unlinkSync(input[3]);

// }else{
//     console.log("invalid input");
// }


// // displaying file list from folder
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,"files");
//  for (let index = 1; index <= 5; index++) {
//     // fs.writeFileSync(dirPath + "/hello"+index+".txt", "this is file "+index);
//     fs.writeFileSync(dirPath+`/AgainHello${index}.txt`,`This is file numbered ${index}`);
     
//  }
//  fs.readdir(dirPath,(err, files)=>{
//     //  console.warn(files);
//     files.forEach((item)=>{
//         console.log("Name of file --> ",item);
//     })
//  })


// // CRUD with file system
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'CRUD');
// const filePath = `${dirPath}/sandwich.txt`;

// // fs .writeFileSync(filePath, "This is a simple text file");  //create a file
// // fs.readFile(filePath, 'utf-8', (err, item)=> {
// //    console.log(item);
// // });
// // fs.appendFile(filePath, " and named as icecream.", (err)=>{    //update content of file
// //    if (!err) {
// //       console.log("file updated");
// //    }
// // });
// // fs.rename(filePath, `${dirPath}/Barger.txt`, (err)=>{    //rename the file
// //    if (!err) {
// //       console.log("file name updated");
// //    }
// // });
// fs.unlinkSync(`${dirPath}/Barger.txt`);   //delete the file


// //Handle Asyncronus Data
// let a = 10;
// let b = 0;
// let waitingData = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//    resolve(30);
//    },2000);
// });
// waitingData.then((b)=>{
//    console.log(a+b);    //waiting for waitingData
// });
// console.log(a+b);    //executing at first


//expressJs intro
const express = require('express');
const app = express();
app.get('',(req, res)=>{
    res.send(`
    <h1>Hello, this is Home Page</h1>
    <a href = "/about"> Go to About Us </a>
    <a href = "/help"> Go to Help </a>
    `);
});
app.get('/about',(req,res)=>{
    res.send(`
        <input type="text" placeholder="Username" value = ${req.query.name}>
        <button>Click Me</button>
        <br>
        <a href = "/"> Go to Home </a>

    `);
});
app.get('/help',(req,res)=>{
    res.send([
        {
            name:'Debayan',
            roll:'223'
        },
        {
            name:'Ram',
            roll:'232'
        }
    ]);
});
app.listen(7521);