
import express from 'express';

import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Welcome to GBU world mamey</h2>');
});

await connectToDatabase();

app.listen(3000);








