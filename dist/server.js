"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const logger_1 = __importDefault(require("./middleware/logger"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
const server = http_1.default.createServer(app);
app.use(logger_1.default);
app.get('/api', (_req, res) => res.json(require('./routes/api/members')));
app.use(express_1.default.static('public'));
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//# sourceMappingURL=server.js.map