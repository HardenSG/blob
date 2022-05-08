// lead into the express module
const express = require('express')
const db = require('../database/mysql')

// create the example of express.router called router
const router = express.Router()

//-------------------------------------------------------
//you also can lead into middleware in router's file 
const middleware = require("../middleware/middleware")

// use the function utilize router
// router.use(middleware.first)
//--------------------------------------------------------

// mounted this project to this example of express.router
router.get('/',(req,res)=>{
    res.send({
        name:'ydq',
        age:20
    })
})

// this is a normal's interface but it's obvious that it's use the part middleware''s function
router.post('/',middleware.first,(req,res)=>{
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

        let MysqlResult = []

        Array.from(re).map( result=> {
            // for (const key in result) {
            //     MysqlResult = result[key]
            // }
            let content = {}
            content.id = result.user_id
            content.name = result.user_name
            content.introduce = result.user_introduce
            content.emial = result.user_email

            MysqlResult.push(content)
        } )

        res.send({
            result:MysqlResult,
            name:'好了好了！'
        })
    })
})

// export this module 
module.exports = router