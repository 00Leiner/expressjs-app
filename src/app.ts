import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});