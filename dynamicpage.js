const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,'public');
const app = express();
app.set('view engine','ejs') // ejs Template engine

const reqFilter = require('./middleware/loginmiddleware')
const route = express.Router();
route.use(reqFilter); // only route.get route apply middleware
// app.use(reqFilter); // all route apply middleware

app.get('/login',(_,resp)=>{
    resp.render('login');
})

route.get('/profile',(_,resp)=>{
    const user = {
        name : 'Krishna',
        email : 'krishna.iskon@gmail.com',
        skills : ['php','nodejs','asp.net','c++']
    }
    resp.render('profile',{user});
})

app.get('/contact',(_,resp)=>{
    resp.render('contact');
})
app.get('/about',(_,resp)=>{
    resp.render('about');
})

app.use('/',route);

app.listen(5000);


