const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,'public');
const app = express();

// app.use(express.static(publicPath)); // if we use this method so url call .html extention static page calld like help.html


// Remove extention form url simple call /help , 
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`);
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
})

app.listen(5000);

