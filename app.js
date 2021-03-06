const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./server/routes');
const frontendApp = require('./server/tools/serve-frontend');

const {DB_USER, DB_PSW, DB_HOST, DB_NAME, PORT = 3310 } = process.env;
const URL = `mongodb+srv://${DB_USER}:${DB_PSW}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(frontendApp);

mongoose
    .connect(URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT);
        console.log(`Listening on port: ${PORT}`);
    })
    .catch(console.error);