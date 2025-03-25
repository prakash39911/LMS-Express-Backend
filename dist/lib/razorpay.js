"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.razorPayInstance = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
exports.razorPayInstance = new razorpay_1.default({
    key_id: process.env.RZPAY_KEY_ID,
    key_secret: process.env.RZPAY_SECRET_KEY,
});
