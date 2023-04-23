const http = require('http');
const fs =require('fs');


const server = http.createServer((req,res) => {
    const url =req.url;
    const method =req.method;
    if (url === '/node') {

            res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My First Page</title><head>');
    res.write('<body><h1>Welcome to my Node Js project </h1></body>');
    res.write('</html>');
   return  res.end();
        
    }
    if (url === '/home') {
        res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title> My First Page</title><head>');
res.write('<body><h1> Welcome home</h1></body>');
res.write('</html>');
return  res.end();
    
}
if (url === '/about') {
    res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title> My First Page</title><head>');
res.write('<body><h1> Welcome to About Us page</h1></body>');
res.write('</html>');
return  res.end();

}
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();


    }

    //process.exit();
    //res.setHeader('Content-Type','text/html');
    //res.write('<html>');
    //res.write('<head><title> My First Page</title><head>');
    //res.write('<body><h1>Hello from Node.js server!</h1></body>');
    //res.write('</html>');
    //res.end();
    
    });

server.listen(4000);