const mongoose = require('mongoose')

const connectionURL='mongodb://127.0.0.1:27017/dragonfire-api'
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex:true
})


/*
const me = new User({
    name:'Bleau',
    email:'bleau@bleau.com',
    password:'Bleauthis 1tot3st'
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error:', error)
})
*/


const Stats = mongoose.model('Stats',{
    name:{
        type:String,
        required:true
    },
    arcane:{
        type:Number
    },
    martial:{
        type:Number
    },
    deception:{
        type:Number
    },
    devotion:{
        type:Number
    },
    hand:{
        type:Number
    },
    gold:{
        type:Number
    },
    hp:{
        type:Number
    },
})

const wizard = new Stats({
    name:	    'wizard',
    arcane:		2,
    martial:	-1,
    deception:	-1,
    devotion:	-1,
    hand:	    2,
    gold:		2,
    hp:		    4
})

wizard.save().then(()=>{
    console.log(wizard)
}).catch((error)=>{
    console.log('Error:', error)
})

