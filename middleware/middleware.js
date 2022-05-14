middleware = {}

middleware.first = (req,res,next)=>{
    console.log('我执行了！');
    next()
}
middleware.second = (req,res,next)=>{
    console.log('我执行了dierge！');
    next()
}

//注册的中间件
middleware.register = (req,res,next)=>{
    req.message = {
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        code:req.body.code
    }
    next()
}

//发送验证码的中间件
middleware.sendCode = (req,res,next)=>{
    req.message = {
        email:req.body.email
    }
    next()
}

// 登录的中间件
middleware.login = (req,res,next)=>{
    req.message = {
        email:req.body.email,
        password:req.body.password
    }
    next()
}

middleware.makeui = ( req , res , next ) => {
    req.message = {
        user_email:req.user.user_email,
        light:req.body.light,
        dark:req.body.dark,
        introduce:req.body.introduce,
        location:req.body.location,
        title:req.body.title,
        word:req.body.word
    }
    next()
}



// 错误中间价
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