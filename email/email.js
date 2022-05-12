// lead into the mailer module 
const nodemailer = require("nodemailer")

// create the example of nodemailer's object is createTransport
const transport = nodemailer.createTransport({
    host:'smtp.qq.com',
    secure:true,
    secureConnection:true,
    port:465,
    auth:{
        user:'1694886748@qq.com',
        pass:'ryvybxkxicznbhec'
    }
})

const sendMailer = ( emial , subject , content) => {

// create the object of send message's option
    let option = {
        from:'闫德强的私人博客 <1694886748@qq.com>',
        to: emial ,
        subject : subject,
        html: content
    }

    transport.sendMail(option, (err,info) => {
        if (err) {
            console.log(err);
        }else{
            const msg = info.messageSize
            return msg
        }
    })

}

module.exports = sendMailer




























