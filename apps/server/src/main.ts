import express from 'express';
import cors from 'cors'
import * as path from 'path';
import routes from './app/routes';
const app = express();
app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api',routes);

app.get('/api/health', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
