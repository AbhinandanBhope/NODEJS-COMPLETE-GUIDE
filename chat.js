const http = require('http');
const express = require("express"); 
const fs = require("fs"); 
const chat= express(); 
chat.use(express.urlencoded({ extended: true })); 
 
chat.get("/", (req, res) => { 
    fs.readFile("username.txt", (err, data) => { 
        if (err) { 
            console.log(err); 
            data = "No chat exist"; 
        } 
        res.send( 
            `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')"> 
                <input type="text" name="message" id="message"> 
                <input type="hidden" name="username" id="username"> 
                <br /> 
                <button type="submit">Send</button> 
            </form>`) 
        }); 
}); 
chat.post("/", (req, res) => { 
    if (req.body.username && req.body.message) { 
        fs.writeFile( 
            "username.txt", 
            `${req.body.username}: ${req.body.message} `, 
            { flag: "a" }, 
            (err) => (err ? console.log(err) : null) 
        ); 
    } 
    res.redirect("/"); 
}); 
chat.get("/login", (req, res) => { 
    res.send( 
        `<form action="/login" method="POST" onSubmit="localStorage.setItem('username'+" ", document.getElementById('username').value)"> 
        <input type="text" name="username" placeholder="username" id="username"> 
        <br /> 
        <button type="submit">Login</button> 
    </form>`); 
}); 
chat.post("/login", (req, res) => res.redirect("/")); 
chat.listen(8000);