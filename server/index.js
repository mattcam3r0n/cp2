const express = require("express");
const mongoose = require("mongoose");
const router = require('./express/routes')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Oprah:Oprah@cluster0-chqnf.mongodb.net/test?retryWrites=true&w=majority";
 
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.open(err => {
//   const collection = client.db("checkpoint-two").collection("movies");
//   // perform actions on the collection object
//   client.close();
// });
 
mongoose.connect(uri, { useNewUrlParser: true, dbName: 'checkpoint-two' })
  .then(() => console.log('connected to MongoDB!'))
  .catch(err => console.log(err));
 
 
const app = express();
app.use(bodyParser.json());
app.use(router)
app.get("/movies", (req, res) => {
    res.send(req.body)
})
 
// app.use(bodyParser);
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});