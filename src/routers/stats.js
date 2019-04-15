const express = require('express')
const Stats = require('../models/stats')
const router = new express.Router()


//create stats
router.post('/stats', async (req,res)=>{
    const stats=new Stats(req.body)

    try{
        await stats.save()
        res.status(201).send(stats)
    }catch (e){
        res.status(400).send(e)
    }
})

router.get('/stats', async (req, res) => {
    try {
        console.log('entering /stats')
        const stats = await Stats.find({})
        res.send(stats)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/stats/:id', async (req, res) => {
    const name = req.params.id
    try {
        const stats = await Stats.findByCredentials(name)

        if (!stats) {
            return res.status(404).send()
        }

        res.send(stats)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router