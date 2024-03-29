const express = require('express');
require('dotenv').config();
const cors = require('cors');
const videosRouter = require('./routes/videos');
const usersRouter = require('./routes/users');

const app = express();
const SERVERPORT = process.env.SERVERPORT;

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES    
//videos
app.use('/api/v1/videos', videosRouter);
//users
app.use('/api/v1/users', usersRouter);

app.listen(SERVERPORT, () => {
    console.log(`Server listening at port ${SERVERPORT}`);
});

