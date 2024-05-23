const express = require('express')
const router = express.Router()
const connection = require('../database/Connection')
const jwt = require('jsonwebtoken')

//#region LOGIN
router.post(`/validate`, (req, res) => {
    const { username, password } = req.body

    const user = {
        username: username,
        password: password
    }

    const token = jwt.sign({user}, process.env.SECRET_TOKEN, {expiresIn: '30s'});
    res.cookie('token', token, {
        httpOnly: true,
        secure:true
    })

    if(token){
        res.status(200).send(token)
    } else {
        res.status(500).send({
            status: token,
            message: 'jwt sign in error'
        })
    }
});
//#endregion

module.exports = router