import express from 'express';
import cors from 'cors'
import * as path from 'path';
const app = express();
app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/health', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
