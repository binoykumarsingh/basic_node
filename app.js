const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/newuserdb';

const app = express();

mongoose.connect(url);

const con = mongoose.connection;

con.on('open',()=>{
	console.log("connected to the db");
});

app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user',userRouter);

app.listen(9000, ()=> {
	console.log("server started ");
});


