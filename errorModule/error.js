const error = {}

error.error = (err,req,res,next)=>{
    console.log('服务器出现了错误!' + err.message);
    res.send(`Error: ${err} , ${err.message}`)
}

module.exports = error  