import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  // Load .env
  dotenv.config({ path: path.join(__dirname, '../../.env') });
}

const port = process.env.PORT || 4200;

const app = express();

const clientPath = path.join(__dirname, '../../static');

// Serve the static files from the React app
app.use(express.static(clientPath));
app.use(cors());

const publicInfo = {
  users: [{ name: 'jonathan' }],
};

app.get('/api/users', (req, res) => {
  res.send(publicInfo.users);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, '/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening :${port} mode:${NODE_ENV}`);
});
