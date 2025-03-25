"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../controller/paymentController");
const router = (0, express_1.Router)();
router.route("/createOrder").post(paymentController_1.handleCreateOrder);
router.route("/verify-payment").post(paymentController_1.handleVerifyPayment);
exports.default = router;
