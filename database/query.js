const db = require("./mysql")

exports.insert = ( str , callback ) => {
    return new Promise( (reslove,reject) => {
        db.query( str , (err,result) => {
            if ( err ) {
                console.log('错了!');
            }else{
                reslove( callback && callback(result) )
            }
        })
    })
}   


    