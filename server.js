/* This file contains the basic server setup for the Express ToDo app */
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.declareType('application/json');
  res.jeson({message: 'Hello, World!'});
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
