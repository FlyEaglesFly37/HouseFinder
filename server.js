const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const house = require('./routes/api/house');

const app = express();

app.use(bodyParser.json);

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => console.log(error));

app.use('api/house', house);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));