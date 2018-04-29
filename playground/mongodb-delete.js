//connection to mongo db
// const MongoClient = require('mongodb').MongoClient; or

const { MongoClient, ObjectID } = require('mongodb');



// Connect to the db
MongoClient.connect('mongodb://localhost:27017/todo-app', (err, client) => {
    if(err)
       return console.log('Error: unable to connect to server'); 
    console.log('Sucess: Connected to the server');
    const db = client.db('todo-app')

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((res) => {
    //     console.log(res);   
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Anil'}).then((res) => {
    //     console.log(res); 
    // });
    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({ completed: false }).then( (res) =>{
    //     console.log(res);
    // });

    db.collection('Users').findOneAndDelete({ age: 28 }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    })
    client.close();
});