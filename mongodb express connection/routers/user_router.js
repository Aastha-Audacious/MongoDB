const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const {omit} = require('lodash')

//crud operation
router.post('/create', async (req, res) => {
    let user_data = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone
    }
    try {
        let result = await User.create(user_data)

        res.status(201).send({ message: "created successfully", "result": result })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }

})

router.put('/update/:ID', async (req, res) => {
    try {
        let name = req.body.name;
        let ID = req.params.ID 
        let id = await User.findById(ID)
   
        let result = await User.updateOne({_id:ID},{ $set:{name:name}})
        res.status(200).send({ message: "changed",result: result })

    } catch (error) {
        res.status(500).send({ message: error.mesage })
    }

})

router.patch('/p-update', async (req, res) => {


})

router.delete('/delete', async (req, res) => {


})

router.get('/getall/:id', async (req, res) => {
let id = req.params.id
let result = await User.findOne({_id: id})

res.send({message: final})



})

module.exports = {
    userRouter: router
}
