const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  console.log();
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})
