"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const connectDB_1 = require("./util/connectDB");
const config_1 = __importDefault(require("./util/config"));
const routes_1 = __importDefault(require("./routes"));
// import dotenv from 'dotenv';
// dotenv.config();
const app = (0, express_1.default)();
// app.use(function (req, res, next) {
//   // // Website you wish to allow to connect
//   // res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);
//   // // Request methods you wish to allow
//   // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   // // Request headers you wish to allow
//   // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   // // Set to true if you need the website to include cookies in the requests sent
//   // // to the API (e.g. in case you use sessions)
//   // res.setHeader('Access-Control-Allow-Credentials', true);
//   // // Pass to next layer of middleware
//   // next();
// });
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
(0, routes_1.default)(app);
app.use((0, morgan_1.default)('dev'));
// Connect database
(0, connectDB_1.connectDB)();
const port = config_1.default.severPort;
app.listen(port, () => {
    console.log(`Server running on ----> http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map