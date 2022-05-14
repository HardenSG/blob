// lead into the express module
const express = require('express')

// lead into the mysql module 
const db = require('../database/mysql')

//lead into the handle module 
const callback = require("../RouterModule/routerCallback")

// create the example of express.router called router
const router = express.Router()

//sendCode's router
router.post('/api/sendCode',middleware.sendCode,callback.sendCode)

// register's router
router.post('/api/register',middleware.register,callback.register)

//login's router
router.post('/api/login',middleware.login,callback.login)

//makeui in back
router.post('/makeui',middleware.makeui,callback.makeui)




/**
 * 以下是前台接口
 */

//receive the content and save 
router.post('/api/markdown',middleware.register,(req,res)=>{
    const  content  = req.content
    let str = `INSERT INTO blogEssay VALUES(4,'${new Date().toLocaleDateString()}','闫德强','${content}')`
    if (content) {
        db.query(str,(err,result) => {
            if(err) throw new Error("报错了！")
            if (result.affectedRows === 1) {
                res.send({
                    status:200,
                    msg:'发布成功！'
                })
            }else{
                res.send({
                    status:401,
                    msg:'发布失败！'
                })
            }
        })
    }
})

//get detail about markdown's API
router.get('/api/getDetail',(req,res)=>{
    let str = `SELECT pubMessage FROM blogEssay WHERE id = ${req.query.id}`
    db.query(str,(err,result) => {
        res.send({
            result:result[0]
        })
    })
})

//receive the message and init the page of fronted
router.get( "/api/receive" , callback.receive)















// export this module   
module.exports = router