const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/notes', (req, res) => {
  res.send('Notes');
});

app.listen(PORT),
  () => {
    console.log('App listening on PORT: ' + PORT);
  };
