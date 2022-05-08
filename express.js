// lead into the express module
const express = require("express")

// create the example of express called app
const app = express()

/**
 * 1. app.use() -> the function of use is register the global middleware
 * ------------------------------------------------------------------------
 * 2. create the static server's keywords(or function) is static -> such as: app.use(['path],express.static('path'))
 * --------------------------------------------------------------------------------------------------------------------
 * 3.  1. middleware is the progress of handle the task. The aim of middleware is handle this task or request aheadly. It's allow that you call manys of middleware continuously,and use the prev's result as the start of next middleware's 
 *     2. the middleware's essence is a function, It's obvious of appearance that function contain three parameter (req,res,next). the next's effect is the key of call middleware continuously.
 *     3. if you want register a global midlleware ,you can definition the functiion firstly and then you need use the name of middleware.  Warning: the register's action must happen before register the router.and you must ensure these middlewares are arrange in order. 
 *     4. In order to handle request convenient ,you can mounted attr on the middleware's parameter's req,so that you can use this attr ,the progross of utilize is req.attr
 *     5. take these funcions put into a new js's File as a module  
 *     6. category of middleware level: application、router、error、built in express 、third party of middleware. 1. Both global and part(not contain router.use) are the application level middleware 2. router level middleware is the keywords called router.use
 *          3. The error level's middleware have four parameter ,these are (err,req,res,next), the error level's middleware's effect is catch the error 4. built in express such as : express.json()、express.urlencoded({extended:false}) Both of these are built in express .
 *          5. The third party of middleware's effect are accordant 
 * 4. Handle this CORS question . At this stage ,if you want to handle this question ,there are four method : 1. CORS 、 2. if you use the frame called Vue so that you can use proxy 、3.JSONP it's only support you send a get request. 4. set the respone's header 
 *      So we talk this first method : CORS(use the cors middleware ,it's a third party of middleware): firstly: npm i cors 2. use this cors 
 *      4. about this response.header , you can do that ,is's also very easy and just one row's code . the keywords is "res.setHeader('Access-Control-Allow-Origin',*[or a designated location of ip])" * stand for allow any location of ip 
 *         Alongside, if you want use the put or delete method ,you need to setHeader,such as:res.setHeader('Arcoss-Control-Allow-Methods',* ['put,delete']) 
 *         
 * Open a new chapter: Mysql
 * Omit database
 * 
 * 
 * 5.   1. install this mysql module 
 *      2. require mysql and call mysql.createPool so that to create a example of mysql , this API need a Object and there are have four configuration items : host、user 、password、database  
 *   
 * 
 * 
 * 
 * 
 * 
 */


//---------------------------------------------------
// lead into the mysql module 
const db = require("./database/mysql")

//---------------------------------------------------




//----------------------------------------------------
//handle this Cross Origin Resource Sharing's question
const cors = require("cors")

//register this cors as a global middleware
app.use(cors())
//----------------------------------------------------





//-----------------------------------------------------
// The option's target is analysis the body's JSON parameter ,in the interface you can utilize the keywords called req.body
app.use(express.json())

// The option's target is analysis the body's key:word parameter ,in the interface you can utilize the keywords called req.body 
app.use(express.urlencoded({extended:false}))
//-----------------------------------------------------









//------------------------------------------------------
// lead into the middleware's module
// const middleware = require('./middleware/middleware')

// register this middleware , remember that arrange in order
// app.use(middleware.first)

// app.use(middleware.second)
//-----------------------------------------------------











//------------------------------------------------------
// lead into the router's module 
const router = require('./RouterModule/router')

// register this router ,and add the fontend of the router called /api
app.use('/api',router)
//------------------------------------------------------












//-----------------------------------------------------
// lead into the error's module
const error = require("./errorModule/error")

// remember that error level middleware can not use above router because that it's take not effect
app.use(error.error)
//-----------------------------------------------------











// listen the port is 8082
app.listen('8082',()=>{
    console.log('http:127.0.0.1:8082 success of start the server');
})