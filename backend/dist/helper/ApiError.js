"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, msg, isOperational = true) {
        super(msg);
        this.statusCode = status;
        this.isOperational = isOperational;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=ApiError.js.map