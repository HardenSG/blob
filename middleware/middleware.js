middleware = {}

middleware.first = (req,res,next)=>{
    console.log('我执行了！');
    next()
}
middleware.second = (req,res,next)=>{
    console.log('我执行了dierge！');
    next()
}
middleware.register = (req,res,next)=>{
    console.log(req.body);
    next()
}

middleware.err = (err,req,res,next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({status:401,msg:'无效的token'})
    }
    res.send({status:500,msg:'未知的错误！'})
}

module.exports = middleware