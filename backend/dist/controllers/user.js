"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const asyncHandler_1 = require("../helper/asyncHandler");
const services_1 = require("../services");
const types_1 = require("../types");
exports.signup = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { username, password } = req.body;
    const hashPswd = await bcrypt_1.default.hash(password, 5);
    const result = await services_1.User.signupS();
    res.status(200).json({
        message: "user signed up!",
        result
    });
});
exports.signin = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { username, password } = req.body;
    const userExist = await services_1.User.existS(username);
    if (userExist) {
        const isMatch = await bcrypt_1.default.compare(password, userExist.password);
        if (isMatch) {
            const payload = {
                username: username,
                roles: userExist.roles,
                userId: userExist.id
            };
            const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: "15m" });
            res.cookie("token", token, { maxAge: 15 * 60 * 1000 });
            res.json({ message: "login successful" });
        }
        else {
            res.json({ message: "wrong password" });
        }
    }
    else {
        res.json({
            message: "user dne!"
        });
    }
});
//# sourceMappingURL=user.js.map