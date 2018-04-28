//connection to mongo db
// const MongoClient = require('mongodb').MongoClient; or

const { MongoClient, ObjectID } = require('mongodb');



// Connect to the db
MongoClient.connect('mongodb://localhost:27017/todo-app', (err, client) => {
    if(err)
       return console.log('Error: unable to connect to server'); 
    console.log('Sucess: Connected to the server');
    const db = client.db('todo-app')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if(err)
    //         return console.log(`Error: unable to insert to todo: ${err}`);
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: "Anil",
    //     age: 27,
    //     phone: '409-444-5487',
    //     email:"anilkumar.90826@gmail.com",
    //     _id: 123
    // }, (err, result) =>{
    //     if(err)
    //         return console.log(`Error: unable to insert to todo: ${err}`);
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').find({name: 'Anil'}).toArray().then( (docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }); 

    client.close();
});