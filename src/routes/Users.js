
const express = require('express')
const router = express.Router()
const connection = require('../database/Connection')
const nodemailer = require('nodemailer');

//#region CREATE
router.post(`/create`, async (req, res) => {
    const { firstname, lastname } = req.body

    try {
        const query = `INSERT INTO users ` +
                        `(FirstName, LastName) ` +
                      `VALUES ` +
                        `('${firstname}', '${lastname}')`
   
        const result = await connection(query)    
        
        if(result){
            res.status(200).send(result)
        } else {
            res.status(500).send({
                status: result,
                message: result.message
            })
        }        

    } catch (error) {
        return false
    }
})
//#endregion

//#region READ
// http://localhost:3001/users/getfields?fields=FirstName,LastName
router.get(`/getfields`, async (req, res) => {    
    const { fields } =  req.query
    
    try {
        const query = `SELECT ` +
                        `${fields} ` +
                        `FROM ` +
                        `users`
        
        const result = await connection(query)

        if(result){
            res.status(200).send(result)
        } else {
            res.status(500).send({
                status: result,
                message: result.message
            })
        }

    } catch (error) {
        return []
    }
})
//#endregion

//#region UPDATE
router.post(`/update`, async (req, res) => {
    const { id, firstname, lastname } = req.body

    try {
        const query = `UPDATE users ` +
                      `SET ` +
                        `firstname = '${firstname}', ` +
                        `lastname = '${lastname}' ` +
                       `WHERE id = ${id}`
   
        const result = await connection(query)    
        
        if(result){
            res.status(200).send(result)
        } else {
            res.status(500).send({
                status: result,
                message: result.message
            })
        }        

    } catch (error) {
        return false
    }
})
//#endregion

//#region DELETE
router.get(`/delete`, async (req, res) => {
    const { id } = req.query

    try {
        const query = `DELETE FROM users ` +
                       `WHERE id = ${id}`
   
        const result = await connection(query)    
        
        if(result){
            res.status(200).send(result)
        } else {
            res.status(500).send({
                status: result,
                message: result.message
            })
        }        

    } catch (error) {
        return false
    }
})
//#endregion




module.exports = router