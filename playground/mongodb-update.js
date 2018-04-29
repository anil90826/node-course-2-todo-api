//connection to mongo db
// const MongoClient = require('mongodb').MongoClient; or

const { MongoClient, ObjectID } = require('mongodb');



// Connect to the db
MongoClient.connect('mongodb://localhost:27017/todo-app', (err, client) => {
    if(err)
       return console.log('Error: unable to connect to server'); 
    console.log('Sucess: Connected to the server');
    const db = client.db('todo-app');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("5ae50c2ca5063cc75bf7b8e6")}, {
            $set : {
                completed: true
            }
        }, {
        
        });


    client.close();
});