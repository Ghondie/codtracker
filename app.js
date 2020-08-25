const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middleware 
app.use(cors());
app.use(bodyParser.json());

// import routes 
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('we are home');
});


//conect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db')
);


app.listen(3000)
