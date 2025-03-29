import { Router } from "express";
import express from "express";

import {
  handleCreateOrder,
  handleGetPaymentDetails,
  handleVerifyPayment,
  handleWebhookForPaymentCapture,
} from "../controller/paymentController";

const router = Router();

router.route("/createOrder").post(express.json(), handleCreateOrder);
router
  .route("/verify-payment-signature")
  .post(express.json(), handleVerifyPayment);
router
  .route("/webhook/rzpay/paymentcapture")
  .post(
    express.raw({ type: "application/json" }),
    handleWebhookForPaymentCapture
  );
router.route("/isPaymentCaptured/:courseId").get(handleGetPaymentDetails);
export default router;
