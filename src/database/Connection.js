const mysql = require('mysql2')

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Abcd1234*",
    port: "3306",
    database: "nodecrud"
})

module.exports = (query) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, sql) => {
            if (err){
                reject(err)
            } else {
                sql.query(query, (err, results) => {
                    if(err){
                        reject(err)
                    } else {
                        resolve(results)
                    }

                    sql.release()
                })
            }
        })
    })
}