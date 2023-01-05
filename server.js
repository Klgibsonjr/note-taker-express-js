const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/routes');

app.listen(PORT),
  () => {
    console.log('App listening on PORT: ' + PORT);
  };
