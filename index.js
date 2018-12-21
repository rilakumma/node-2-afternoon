const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const pC = require('./products_controller');

const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(error=>{
    console.log('error w connection string',error);
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port} !!! 🍿 🍿`);
})

app.post('/api/products', pC.create);
app.get('/api/products', pC.getAll);
app.get('/api/products/:id', pC.getOne);
app.put('/api/products/:id', pC.update);
app.delete('/api/products/:id', pC.delete);
