const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/browser'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/browser/'}),
);

app.listen(process.env.PORT || 8080);
