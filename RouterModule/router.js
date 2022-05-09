// lead into the express module
const express = require('express')

// lead into the token module
const token = require('../createToken/token')

// lead into the mysql module 
const db = require('../database/mysql')

// create the example of express.router called router
const router = express.Router()

// mounted this project to this example of express.router
router.get('/api/',(req,res)=>{
    res.send({
        name:'ydq',
        age:20
    })
})

// this is a normal's interface but it's obvious that it's use the part middleware''s function
router.post('/api/',middleware.first,(req,res)=>{
    // throw new Error('出错了catch this error！')
    // db.query("INSERT INTO users VALUES(1,'SG','当我在追光，我与光同航！',2767525216,'2767525216@qq.com')",(err,result)=>{
    //     // if (err) return new Error('Have a error in this mysql！')
    //     console.log(result);
    // })
    new Promise((resolve,reject)=>{
        db.query('SELECT * FROM users WHERE user_id = 1',(err,result)=>{
            if (err) return new Error('Have a error in this mysql！')
            resolve(result)
        })
    }).then(re=>{
        res.send({
            result:re,
            name:'好了好了！'
        })
    })
})

// register's router
router.post('/api/register',middleware.register,(req,res)=>{
    res.send({
        status:200,
        body:req.body,
        token:token.createToken({id:'1'})
    })
})

//login's router
router.post('/login',middleware.register,(req,res)=>{
    res.send({
        status:200,
        body:req.body,
        user:req.user
    })  
})

router.post('/api/upload',middleware.register,(req,res)=>{
})

// export this module   
module.exports = router