const http = require('http');
const bodyParser =require('body-parser');




const express =require('express');
const app =express();
app.use(bodyParser.urlencoded());

app.use('/add-product',(req,res,next) =>{
    console.log('in middleware');


    res.send('<form action ="/product" method ="POST"><h1> Name of product </h1><input type ="text" name="title"><h1>Size of product</h1> <input type ="text" name="Size"><button type="submit">Add Product </button></form>');

    
    //next(); //allows the request to contains to the next middleware in line
});
app.use('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');

});
app.use('/',(req,res,next) => {
    console.log('in middleware');
    res.send('<h1>hellow form express.js!</h1>');
});
const server = http.createServer(app);



app.listen(3000);



