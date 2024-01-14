const express = require('express');
require('dotenv').config();

const app = express();
const SERVERPORT = process.env.SERVERPORT;

app.listen(SERVERPORT, () => {
    console.log(`Server listening at port ${SERVERPORT}`);
})