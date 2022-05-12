// lead into the mysql module 
const db = require('../database/mysql')

const query = require("../database/query")

// lead into the email module
const sendMailer = require("../email/email")

// lead into the token module
const token = require('../createToken/token')

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

exports.register = async ( req , res ) => {

    const { email , name , password ,code } = req.message

    let str = `SELECT sendCode FROM codeT WHERE email = '${email}'`

    let result = await query.insert( str , ( result ) => {
            return result
    } )
    let flag;
    result.map( item => {
        if ( item.sendCode == code ) {
            flag = true
        }
    } )
    if ( flag ) {   

        let Token = token.createToken({user_name:name,user_email:email})

        let str = `INSERT INTO users (user_name,user_email,user_password,token) VALUES("${name}","${email}","${password}","${ Token }")`
        
        await query.insert(str,(result ) => {
            if ( result.affectedRows === 1 ) {
                res.send({
                    msg:'注册成功！',
                    status:200,
                    token:Token
                })
            }
        })
    }else{
        res.send({
            msg:'验证码有误!'
        })
    }
}

exports.login = async ( req , res ) => {

    const { email , password ,token } = req.message

    let str = `SELECT user_email , user_password , token FROM users WHERE user_email = "${email}"`

    await query.insert( str , ( result ) => {
            if( result[0].user_password == password){
                console.log('ok');
                res.send({
                    msg:'登陆成功!',
                    status:200,
                    token:result.token
                })
            }
    } )

}











