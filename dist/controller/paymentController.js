"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleVerifyPayment = exports.handleCreateOrder = void 0;
const razorpay_1 = require("../lib/razorpay");
const razorpay_utils_1 = require("razorpay/dist/utils/razorpay-utils");
const prisma_1 = __importDefault(require("../lib/prisma"));
const express_1 = require("@clerk/express");
const handleCreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { amount } = data;
        const toNumber = parseInt(amount);
        const options = {
            amount: toNumber,
            currency: "INR",
            receipt: `Receipt no-${Date.now()}`,
            notes: {
                key1: "value3",
                key2: "value2",
            },
        };
        const response = yield razorpay_1.razorPayInstance.orders.create(options);
        res.status(200).json({ success: true, data: response });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
    }
});
exports.handleCreateOrder = handleCreateOrder;
const handleVerifyPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = (0, express_1.getAuth)(req);
    console.log("is User Id", userId);
    if (!userId) {
        throw new Error("User is not Authorized");
    }
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId, } = req.body;
    const secret = process.env.RZPAY_SECRET_KEY;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    try {
        const isValidSignature = (0, razorpay_utils_1.validateWebhookSignature)(body, razorpay_signature, secret);
        if (isValidSignature) {
            // Update the order with payment details
            yield prisma_1.default.enrolledStudents.create({
                data: {
                    courseId: courseId,
                    studentId: userId,
                    order_id: razorpay_order_id,
                    payment_id: razorpay_payment_id,
                },
            });
            console.log("Payment verification successful");
            res.status(200).json({ status: true });
        }
        else {
            res.status(400).json({ status: false });
            console.log("Payment verification failed");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "Error verifying payment" });
    }
});
exports.handleVerifyPayment = handleVerifyPayment;
