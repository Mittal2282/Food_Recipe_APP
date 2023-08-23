const express =require("express");
const expressLayouts =require("express-ejs-layouts");
const app=express();
const port=process.env.PORT || 3000;
const fileUpload =require('express-fileupload');
const session = require('express-session');
const flash =require('connect-flash');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const db=require('./server/models/db');
const category=require('./server/models/category');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(cookieParser('BhavitBlog'));
app.use(session(
    {
        secret : 'BhavitBlog',
        saveUninitialized : true,
        resave : true
    }
));
app.use(flash());
app.use(fileUpload());
app.set('view engine', 'ejs');

app.set('layout','./layouts/main');

const routes =require('./server/routes/recipeRoutes.js')
app.use('/',routes);

app.listen(port, () => 
{
    console.log("Server statrted");
})

