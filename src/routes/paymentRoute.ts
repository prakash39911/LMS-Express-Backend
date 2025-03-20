import { Router } from "express";
import {
  handleCreateOrder,
  handleVerifyPayment,
} from "../controller/paymentController";

const router = Router();

router.route("/createOrder").post(handleCreateOrder);
router.route("/verify-payment").post(handleVerifyPayment);

export default router;
