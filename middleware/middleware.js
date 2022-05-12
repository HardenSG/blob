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
    req.message = {
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        code:req.body.code
    }
    next()
}

middleware.sendCode = (req,res,next)=>{
    req.message = {
        email:req.body.email
    }
    next()
}

middleware.login = (req,res,next)=>{
    req.message = {
        email:req.body.email,
        password:req.body.password,
        token:req.body.token
    }
    next()
}

middleware.err = (err,req,res,next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({status:401,msg:'无效的token'})
    }
    if (err.name === 'utilsMysqlError') {
        return res.send({status:402,msg:'数据库封装参数不匹配'})
    }
    res.send({status:500,msg:'未知的错误！'})
}

module.exports = middleware