
const express = require('express');
const testController = require('./controllers/test-controller');

const app = express();

app.use('/api/test', testController);

app.listen(8080, () => {
    console.log('App andando!');
});
