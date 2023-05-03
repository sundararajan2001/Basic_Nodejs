// import file from './new'

// //MODULES 
// console.log('Core Modules (Inbulit Modules) - http,os,fs..etc');

// const system = require('os');
// console.log("My System is "+system.arch() +" bit");
// console.log("System Details" + system.userInfo());
// console.log(system.totalmem());
// console.log(system.freemem());


// const fNew = require('fs');


// const fNew = require('fs');
// fNew.readFile()
// fNew.writeFileSync('./Newtext.txt', "Hi welcome");
// fNew
// fNew.mkdir("newefolder",(err)=>{
//     if(!err)
//     console.log('Folder Created');
//     else
//     console.log('not created');
// })



// // fNew.renameSync("./node_modules/newss.txt","./node_modules/newNode.txt");
// // const sum = require("./new.js")
// // console.log(sum(1,2));

// //Its print in the terminal screen
// // process.stdout.write('sundar');
// // //Its get the values from terminal
// // process.stdin.on("data",(data)=>{
// //     console.log(data.toString());
// // })

// // process.exit()

const questions = [
    "What's your name?",
    "Where are you from?",
    "what is your salary expectation?"
]

function askQ(i=0){
    process.stdout.write(questions[i])
}
    askQ();
    let answers = []
    process.stdin.on("data",(data)=>{
    answers.push(data.toString())
    if(answers.length == questions.length){
        process.exit();
    }
    else{
        askQ(answers.length);
    }
})
    process.on("exit",()=>{
    console.log('Thanks');
    console.log('Here is your answers')
    for(var i=0;i<answers.length;i++)
    {
        console.log(`${answers[i]}`)
    }
});

// const sum1 = require("./new");
// const sub = require("./new");
// console.log(sum1.add(5,4));
// console.log(sum1.sub(8,4));


// var http = require("http"); 


// http.createServer(function (req, res) { 


//     res.writeHead(200, {'Content-Type': 'text/plain'}); 

//    res.end('This is the example of node.js application \n'); 


// }).listen(8080, ()=>{
//     console.log('http://127.0.0.1:8080/')
// });




// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   port:'3306',
//   user: "root",
//   password: "Sundar2001@"

// });

// con.connect(function(err) {
//   if (err) {throw err};
//   console.log("Connected!");
//   con.query("CREATE DATABASE Newdb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });


//callback funtion - Its uses only in Asyncronus way.

// const { Console } = require("console");

// const fs = require("fs");

// const files = fs.readFileSync("./Newtext.txt" , "utf-8")

// console.log(files);

// console.log("Code after Reading folder");


// fs.readFile('./Newtext.txt', 'utf8', function(err, data){
//     console.log(data);
// });

// console.log('readFile called');


// const http = require("http");

// const fs = require("fs")

// const port = 8080;

// const server = http.createServer( (req,response) => {
//     if(req.url == "/employee"){
//   response.writeHead( 200 , { 'Content-type' : "application/json" } )
//     response.write(JSON.stringify({
//         data: [
//             {
//                 Empcode:'Emp1',
//                 EmpName :'Sundararajan',
//                 Designation : 'Software Engineer'
//             },{
//                 Empcode:'Emp2',
//                 EmpName :'Omkumar',
//                 Designation : 'Software Engineer'
//             },{
//                 Empcode:'Emp3',
//                 EmpName :'Revathi',
//                 Designation : 'Software Engineer'
//             },{
//                 Empcode:'Emp4',
//                 EmpName :'Thinakaran',
//                 Designation : 'Software Engineer'
//             },{
//                 Empcode:'Emp5',
//                 EmpName :'Vanka chandu',
//                 Designation : 'Software Engineer'
//             }

//             ]
//             }))

// //             response.end( );
//   }
//   else if(req.url == "/students")
//   {
//     response.writeHead( 200 , { 'Content-type' : "application/json" } )
//     response.write(JSON.stringify({
//         data: [
//             {
//                 Id:'1',
//                 StudentName :'Sundararajan',
//                 Standard : 10
//             },{
//                 Id:'2',
//                 StudentName :'Omkumar',
//                 Standard : 12
//             },{
//                 Id:'3',
//                 StudentName :'Thinakaran',
//                 Standard : 12
//             },{
//                 Id:'4',
//                 StudentName :'Vanka chandu',
//                 Standard : 10
//             },{
//                 Id:'5',
//                 StudentName :'Revathi',
//                 Standard : 10
//             }

//           ]
//     })) 
//     response.end( );
//   }
//     else if(req.url == "/image"){
//         fs.readFile("./thanks.png", (err,data) => {
//             if(!err){
//                 response.writeHead(200 , { 'content-type' : "image/png"});
//                 response.write(data);
//                 response.end();
//             }else{
//                 response.writeHead(404 , {'content-type' : "text/plain"});
//                 response.write("404 error finding the page");
//                 response.end();
//             }
//         })
// //     }
// else{
//     response.writeHead(404)
//     response.write("404 not found!");
//     response.end();
//   }

// } );

// server.listen(port , (err) => {
//     if(err){
//         console.log('Server Error')
//     }else{
//         console.log('127.0.0.1:8080')
//     }
// })


// async function getFile() {
//   let myPromise = new Promise(function(resolve) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         resolve(req.response);
//       } else {
//         resolve("File not Found");
//       }
//     };
//     req.send();
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }



// function async_StringAdd() {
//     let first_promise = new Promise((resolve, reject) => resolve("Hello "));
//     let second_promise = new Promise((resolve, reject) => resolve("I am Sundararajan"));
//     let combined_promise = Promise.all([first_promise, second_promise]);
//     return combined_promise;
// }

// async function output() {
//     let data = await async_StringAdd();
//     console.log('Its not wait for that')
//     console.log(data);
//     console.log('finished');
    
// }

// output();
// async function fun(){
//     return new Promise((resolve,reject)=>setTimeout(()=>{
//         resolve('success');
//     })
// )}

// async function newfn(){
//     const output= fun();
//     console.log(output);

// }


// newfn()


// async function myFunc() {

//     return new Promise((resolve, reject) => setTimeout(() => {
//         resolve(2);
//     }, 1000))

// }

// async function increment() {

//     const num1 = myFunc();
//     const num2 = await incrementAdd(num1);
//     const num3 = await incrementAdd(num2);
//     const num4 = await incrementAdd(num3);

//     console.log(num4);

// }

// async function incrementAdd(num1){
//     return new Promise((resolve)=>setTimeout(()=>{
//             resolve(num1 + 1);
//     },1000))
// }

// increment()


// function myfun(){
//     return new Promise((resolve,reject)=>setTimeout(()=>{
//         // resolve("Hi I am Sundararajan")
//         reject("error");
//     },1000))
//     }


//  function awaitfun(){
//     myfun().then(console.log).catch(console.log); 
//     // const output = await myfun();
//     // console.log(output);
//     console.log("Not waited");
// }

// awaitfun();

// function nufun(){
//     // const pro = new Promoise();
//     // return pro;

//     return new Promise((resolve,reject)=>{ resolve(console.log('sundar'))});
// }
  

// nufun();


let a= 10;

const newPromise =  new Promise(function(resolve,reject){
    if(a==10){
        resolve()
    }
    else{
        reject()
    }
}
)

newPromise.then(()=>{
    console.log("true")
}).catch(()=>{
    console.log("false")
})

async function WWew ((req,res)=>{

})
