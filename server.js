const throng = require('throng');
const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');

function start () {
  const app = express();

  // require static assets
  app.use('/public', express.static(path.join(__dirname, 'public')));

  // base app
  app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'src/index.html'));
  });

  app.listen(port);
}

throng({
  workers: 4,
  start: start,
});

console.log(`Running on localhost:${port}`);
