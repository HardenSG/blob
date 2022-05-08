middleware = {}

middleware.first = (req,res,next)=>{
    console.log('我执行了！');
    next()
}
middleware.second = (req,res,next)=>{
    console.log('我执行了dierge！');
    next()
}

module.exports = middleware