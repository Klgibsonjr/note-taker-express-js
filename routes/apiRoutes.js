const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const fs = require('fs');

fs.readFile('db/db.json', 'utf8', (err, data) => {
  if (err) throw err;
  let notes = JSON.parse(data);
  router.get('/api/notes', (req, res) => {
    res.json();
  });

  router.post('/api/notes', (req, res) => {
    req.body.id = uuid();
    let newNote = req.body;
    notes.push(newNote);
    updateDB();
  });

  const updateDB = () => {
    fs.writeFile(noteData, JSON.stringify(noteData), (err) => {
      if (err) throw err;
      return;
    });
  };
});

module.exports = router;
