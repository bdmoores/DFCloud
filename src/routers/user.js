const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

//create users
router.post('/users', async (req,res)=>{
    const user=new User(req.body)

    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    }catch (e){
        res.status(400).send(e)
    }
})

//login 
router.post('/users/login', async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch(e){
        res.status(400).send()
    }
})

//Logout of profile
router.post('/users/logout', auth, async (req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()

    }catch(e){
        res.status(500).send
    }
})

//logout of alll devices
router.post('/users/logoutAll', auth, async (req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send
    }
})

//return my profile
router.get('/users/me' ,auth , async (req,res)=>{
    res.send(req.user)
})

// //find user by id
// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })




// //list all users
// router.get('/users' ,auth , async (req,res)=>{
//     try{
//         const users = await User.find({})
//         res.send(users)
//     }catch(e){
//         res.status(400).send()
//     }
// })

//update user
router.patch('/users/me', auth, async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates  = ['name','email','password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid Updates!'})
    }

    try{
        updates.forEach( (update) => req.user[update]=req.body[update])
        await req.user.save()
        res.send(req.user)    
    }catch(e){
        res.status(400).send
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
