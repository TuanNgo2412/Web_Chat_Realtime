"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor() { }
    login(req, res) {
        try {
            res.send('Hello Kitty');
        }
        catch (error) {
            console.log('error: ', error);
            res.status(400).json({
                errCode: 1,
                err: error,
            });
        }
    }
    news(req, res) {
        res.send('How are you?');
    }
}
exports.default = new LoginController();
//# sourceMappingURL=LoginController.js.map