const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.status(200).json({
    status: 'successs',
    message: 'Successfully received the reques',
  });
});

app.listen(8080);
