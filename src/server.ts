import express from 'express';
import http from 'http';
import logger from './middleware/logger';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(logger);

// Set static folder for / path
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/api', (_req, res) => res.json(require('./routes/api/members')));

// Render index.html no matter the path
app.get('*', (_req, res, _next) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
