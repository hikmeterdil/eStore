const express = require('express');
const mongoose = require('mongoose');

const routes = require('./server/routes');
const frontendApp = require('./server/tools/serve-frontend');

const PORT = process.env.PORT || 3310;

const {DB_USER, DB_PSW, DB_HOST, DB_NAME } = process.env;

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use(frontendApp);

const URL = `mongodb+srv://${DB_USER}:${DB_PSW}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
    .connect(URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT);
    })
    .catch(console.error);