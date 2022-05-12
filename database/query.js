const db = require("./mysql")

exports.insert = ( str , callback ) => {
    return new Promise((reslove,reject) => {
        db.query( str , (err,result) => {
            if ( err ) {
               reject(err)
            }else{
                reslove(callback && callback(result))
            }
        })
    })
}   


    