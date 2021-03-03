"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
function logger(req, _res, next) {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} at ${moment_1.default().format('hh:mm:ss A')}`);
    next();
}
exports.default = logger;
//# sourceMappingURL=logger.js.map