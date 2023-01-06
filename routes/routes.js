const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.gpet('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/notes', (req, res) => {
  res.json({
    title: 'Notes Title',
    text: 'Notes text',
    id: uuid,
  });
});

module.exports = routes;
