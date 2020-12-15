const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Routes
const userRoutes = require('./routes/user')

// environmental variable or you can say constants
env.config();

// MongoDB connection
mongoose.connect(
 `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.wxwwq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
 {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
 }
).then( ()=> {
  console.log("Databse Connected")
});

// MiddleWare for json data
app.use(express.json());
// app.use(bodyParser());
app.use('/api', userRoutes);


// Server Run
app.listen(process.env.PORT, ()=> {
 console.log(`Ypur runing port is ${process.env.PORT}`)
})