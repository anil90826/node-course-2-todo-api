
const express = require('express');
const bodyParser = require('body-parser');


const { mongoose } = require('./db/mongoose');
//import { mongoose } from "./db/mongoose";
const { Todo } = require('./models/todo');
const { User } = require('./models/user');



const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }).catch( (err) => { res.status(400).send(err) });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }).catch( (e) => res.status(400).send(e) );
  });


app.listen(3000, () =>{
    console.log(`Status: App started on port:3000`);
});


module.exports = { app };