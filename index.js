const express = require('express');
const app = express();
const db = require('./1.database');
const bodyParser = require('body-parser');
const port = 5000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// check connection to database
db.connect((err) => {
    if (err) {
        console.log(`error connection ${error.stack}`);
        return
    }
    console.log(`connect on database`);
})

// check connection api
app.listen(port, ()=>console.log(`running on port: ${port}`));