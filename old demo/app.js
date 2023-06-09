
const path =require('path');

const express =require('express');
const bodyParser =require('body-parser');
const app =express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shope');
const contactRoutes =require('./routes/contact');
const success = require('./routes/Success');


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(success);
app.use((req ,res ,next ) =>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(4000);
