const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/ database.config');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


require('./app/routes/user.routes.js')(app);





mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//starting server
app.get('/', (req, res) => {
    res.json({"message": "Welcome to   Dive application."});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});