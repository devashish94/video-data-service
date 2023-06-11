const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const rootRouter = require('./routes/rootRouter')
const videoRouter = require('./routes/videoRouter')

app.use('/', rootRouter);
app.use('/video', videoRouter);

app.listen(PORT, HOST, function() {
    console.log(`video-data-service has started at http://${HOST}:${PORT}`)
})

