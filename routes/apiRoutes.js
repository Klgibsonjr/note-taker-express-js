const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const notesData = require('../db/db.json');

router.get('/api/notes', (req, res) => {
  res.json(notesData);
});

router.post('/api/notes', (req, res) => {
  let notesDataPath = path.join(__dirname, '../db/db.json');
  let createNote = req.body;

  createNote.id = uuidv4();
  notesData.push(createNote);

  fs.writeFile(notesDataPath, JSON.stringify(notesData), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Your notes has been created!');
  });
  res.json(createNote);
});

router.delete('/api/notes/:id', (req, res) => {
  let notesDataPath = path.join(__dirname, '../db/db.json');
  for (let i = 0; i < notesData.length; i++) {
    if (notesData[i].id == req.params.id) {
      notesData.splice(i, 1);
      break;
    }
  }
  fs.writeFileSync(notesDataPath, JSON.stringify(notesData), (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log('Your notes has been deleted!');
    }
  });
  res.json(notesData);
});

module.exports = router;
