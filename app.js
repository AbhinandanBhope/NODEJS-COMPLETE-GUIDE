const http = require('http');


const routes =require('./routes');
const express =require('express');
const app =express();
app.use((req,res,next) =>{
    console.log('in middleware')
    next(); //allows the request to contains to the next middleware in line
});
app.use((req,res,next) =>{
    console.log('in middleware')
    res.send('<h1>hellow form express.js!</h1>');
});
const server = http.createServer(app);

console.log(routes.someText);

app.listen(3000);


