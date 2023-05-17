const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/images', (req, res) => {
  const imageDir = path.join(__dirname, 'public/images');
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading image directory');
    } else {
      const webpFiles = files.filter(file => file.endsWith('.webp'));
      res.json(webpFiles);
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
