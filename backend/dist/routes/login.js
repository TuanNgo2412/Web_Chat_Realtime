"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const router = express_1.default.Router();
exports.router = router;
router.get('/login/:slug', LoginController_1.default.news);
router.get('/login', LoginController_1.default.login);
//# sourceMappingURL=login.js.map