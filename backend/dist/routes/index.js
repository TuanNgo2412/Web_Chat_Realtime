"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./login");
function route(app) {
    app.get('/login', login_1.router);
}
exports.default = route;
//# sourceMappingURL=index.js.map