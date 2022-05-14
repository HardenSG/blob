// lead into the mysql module 
const db = require('../database/mysql')

const query = require("../database/query")

// lead into the email module
const sendMailer = require("../email/email")

// lead into the token module
const token = require('../createToken/token')

/**发送验证码callback
 * 
 * @param {email} req 请求体内容
 * @returns 
 */
exports .sendCode = async ( req , res ) =>{

    const {email} = req.message

    let str = `SELECT * FROM users WHERE user_email = "${email}";`
    
    let flag ;
    await query.insert( str , (result)=>{
        flag = result
    })
    
    if (flag.length) {
        res.send({
            status:500,
            msg:'你已经注册过了！'
        })
        return
    }

    // create a random number
    let randCode = Math.floor( Math.random() * 1000000 )

    // create a subject
    let subject = "后台博客系统注册"

    let content = `
    <div class="bgImg" style="background: url('http://36.133.40.168:8083/email.png');background-attachment:fixed;background-size: 100% 100%;width: 100vw;height: 100vh;display: flex;flex-direction: column;justify-content: start;align-items: center;"
    >
        <span class="code" style="display: inline-block;height: 8rem ;padding-top: 7rem;font-size: 30px;font-weight: 700;color:rgb(8, 165, 186)"
        >   
            ${ randCode }
        </span>
    </div>
    `
    const result = sendMailer(email,subject,content)
    
    if ( !result ) {

        let str = `INSERT INTO codeT VALUES('${email}',${randCode}); `

        await query.insert(str,(result ) => {
            if ( result) {
                res.send({
                    status:200,
                    msg:'验证码发送成功！'
                })
            } 
        })
    }
 
}

/**注册callback
 * 
 * @param {email , name , password ,code} req 请求体字段
 * @returns 
 */
exports.register = async ( req , res ) => {

    const { email , name , password ,code } = req.message

    //验证users表是否存在该人
    let SearchExitsStr = `SELECT * FROM users WHERE user_email = '${email}'`
    
    let SearchExitsFlag = await query.insert( SearchExitsStr , ( result ) => {
        return result
    } )

    if ( SearchExitsFlag.length ) {
        res.send({
            msg:'你已经注册过了!'
        })
        return
    }

    // 用于验证验证码
    let str = `SELECT sendCode FROM codeT WHERE email = '${email}'`

    // result > 0 说明验证码存在
    let result = await query.insert( str , ( result ) => {
        return result.filter( item => item.sendCode == code )
    } )

    // 验证码正确，将信息，插入表中
    if ( result.length ) {   

        //创建token
        let Token = token.createToken({user_name:name,user_email:email})

        let str = `INSERT INTO users (user_name,user_email,user_password,token) VALUES("${name}","${email}","${password}","${ Token }")`

        let InsertUIStr = ` INSERT INTO user_message values ( "${ email }" , "http://36.133.40.168:8083/1.webp" , "http://36.133.40.168:8083/2.webp" , "" , "" , "我的博客" , "当我在追光，我与光同航") `

        await query.insert(str, async (result ) => {
            if ( result.affectedRows === 1 ) {
                await query.insert( InsertUIStr , ( re ) => {
                    if ( re.affectedRows === 1 ) {
                        res.send({
                            msg:'注册成功！',
                            status:200,
                            token:Token
                        })
                    }
                } )
            }
        })
    }else{
        res.send({
            msg:'验证码有误!'
        })
    }
}

/**登录callback
 * 
 * @param { email , password  } req 请求体内容 
 * @returns 
 */
exports.login = async ( req , res ) => {

    const { email , password } = req.message

    let str = `SELECT user_email , user_password , token FROM users WHERE user_email = "${email}"`
    
    await query.insert( str , ( result ) => {
            if( result.length !== 0 && result[0].user_password == password){
                res.send({
                    msg:'登陆成功!',
                    status:200,
                    token:result[0].token
                })
            }else{
                res.send({
                    msg:'登陆失败!',
                    status:401,
                })
            }
    } )

}

/**修改基本信息
 * 
 * @param {  light , dark , introduce , location , title , word  }请求体参数 
*  @param {  user_email , light , dark , introduce , location , title , word }请求头token解析参数 
 */
exports.makeui = async ( req , res ) => {

    // 解构出变量
    const { user_email , light , dark , introduce , location , title , word } = req.message

    //更新内容
    let InsertStr = ` UPDATE user_message set light_img = "${ light }" , dark_img = "${ dark }" , user_introduce = "${ introduce }" , user_location = "${ location }" , user_title = "${ title }" , user_word = "${ word }" WHERE email = "${ user_email }"`

    console.log(InsertStr)

    await query.insert( InsertStr , ( result ) => {
        if ( result.affectedRows === 1 ) {
            res.send({
                status:200,
                msg:'修改成功!'
            })
        }
    } )

}











//------------------------------------------------下面是前台接口----------------------------------------------------



exports.receive = async ( req , res ) => {
    
    console.log('执行了');

    let str = `SELECT * FROM user_message WHERE email = "2767525216@qq.com"`

    query.insert( str , ( result ) => {
        if ( result.length ) {
            res.send({
                data:result[0]
            })
        }
    })



}


































































