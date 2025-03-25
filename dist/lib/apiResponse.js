"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiResponse = void 0;
class apiResponse {
    constructor(status, message, data = []) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
exports.apiResponse = apiResponse;
