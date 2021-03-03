import express from 'express';
import http from 'http';
import logger from './middleware/logger';

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(logger);

app.get('/api', (_req, res) => res.json(require('./routes/api/members')));

app.use(express.static('public'));

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
