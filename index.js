const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res) => {
  res.send('Proxy server is running!');
});

app.get('/sunwin', (req, res) => {
  const url = 'https://web.sunwin.us/';
  req.pipe(request(url)).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
