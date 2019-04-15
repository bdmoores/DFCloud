const mongoose = require('mongoose')

const statsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
    },
    arcane:{
        type:Number,
        trim:true
    },
    martial:{
        type:Number,
        trim:true
    },
    deception:{
        type:Number,
        trim:true
    },
    devotion:{
        type:Number,
        trim:true
    },
    hand:{
        type:Number,
        trim:true
    },
    gold:{
        type:Number,
        trim:true
    },
    hp:{
        type:Number,
        trim:true
    },
})

statsSchema.statics.findByCredentials = async (name)=>{
    const stats= await Stats.findOne({name})
    
    if(!stats){
        throw new Error('Unable to login')
    }

    return stats
}

const Stats = mongoose.model('Stats',statsSchema)

module.exports = Stats

