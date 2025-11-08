// Middleware
module.exports = reqFilter = (req,resp,next)=>{
    if(!req.query.token){
        resp.send('please login first');
    }else if(req.query.token != 'ABC'){
        resp.send('Token not valid')
    }else{
        next();
    }
}