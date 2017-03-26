import express from 'express';

const app = express();

app.use('/', (req, res, next) => {
  res.send('hello');
});

export default app;