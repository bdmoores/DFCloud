//CRUD create read update delete

//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID
//previous code done in 1 line via deconstructioning

const{MongoClient, ObjectID}=require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'dragonfire'


MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log("Unable to connect to database.")
    }

    const db=client.db(databaseName)

    db.collection('class').findOne({
        name:'fighter'
    }).then((result)=>{
            console.log(result)
    }).catch((error)=>{
            console.log(error)
    })


    /*
    db.collection('class').insertOne({
        name:	    'wizard',
        arcane:		2,
        martial:	-1,
        deception:	-1,
        devotion:	-1,
        hand:	    2,
        gold:		2,
        hp:		    4
    },(error,result)=>{
        if(error){
            return console.log('unable to insert user')
        }

        console.log(result.ops)

    })
    */
    /*

    db.collection('class').insertMany([
        {
            name:	    'cleric',
            arcane:		-1,
            martial:	-1,
            deception:	0,
            devotion:	2,
            hand:	    2,
            gold:		2,
            hp:		    6
        },{
            name:	    'fighter',
            arcane:		-1,
            martial:	2,
            deception:	-1,
            devotion:	-1,
            hand:	    1,
            gold:		0,
            hp:		    8
        },{
            name:	    'rogue',
            arcane:		-1,
            martial:	0,
            deception:	2,
            devotion:	-1,
            hand:	    1,
            gold:		2,
            hp:		    7
        }
    ],(error,result)=>{
        if(error){
            return console.og('unable to insert documents')
        }
        console.log(result.ops)
    })
    */







})
