import { Router } from "express";
import express from "express";

import {
  handleCreateOrder,
  handleGetPaymentDetails,
  handleVerifyPaymentSignature,
  handleWebhookForPaymentCapture,
} from "../controller/paymentController";

const router = Router();

router.route("/createOrder/:courseId").post(express.json(), handleCreateOrder);
router
  .route("/verify-payment-signature")
  .post(express.json(), handleVerifyPaymentSignature);
router
  .route("/webhook/rzpay/paymentcapture")
  .post(
    express.raw({ type: "application/json" }),
    handleWebhookForPaymentCapture
  );
router.route("/isPaymentCaptured/:courseId").get(handleGetPaymentDetails);
export default router;
