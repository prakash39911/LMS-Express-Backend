import { Request, Response } from "express";
import { razorPayInstance } from "../lib/razorpay";
import {
  validatePaymentVerification,
  validateWebhookSignature,
} from "razorpay/dist/utils/razorpay-utils";
import prisma from "../lib/prisma";
import { getAuth } from "@clerk/express";

export const handleCreateOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    const { courseId } = req.params;
    const data = req.body;
    const { amount } = data;

    const toNumber = parseInt(amount);

    const options = {
      amount: toNumber,
      currency: "INR",
      receipt: `Receipt no-${Date.now()}`,
      notes: {
        userId: `${userId}`,
        courseId: `${courseId}`,
      },
    };

    const response = await razorPayInstance.orders.create(options);

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

export const handleVerifyPaymentSignature = async (
  req: Request,
  res: Response
) => {
  const { userId } = getAuth(req);

  if (!userId) {
    throw new Error("User is not Authorized");
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const secret = process.env.RZPAY_SECRET_KEY!;

  try {
    const isValidSignature = validatePaymentVerification(
      { order_id: razorpay_order_id, payment_id: razorpay_payment_id },
      razorpay_signature,
      secret
    );

    if (!isValidSignature) {
      res
        .status(500)
        .json({ status: false, message: "Payment is not verified" });
    }

    res
      .status(200)
      .json({ status: true, message: "Payment verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Error verifying payment" });
  }
};

export const handleWebhookForPaymentCapture = async (
  req: Request,
  res: Response
) => {
  try {
    const incomingSignature = req.headers["x-razorpay-signature"] as string;

    if (!incomingSignature) {
      res.status(500).json({ status: false, message: "No signature received" });
      return;
    }

    const inComingBody = req.body;

    const webHookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

    const isValidSignature = validateWebhookSignature(
      JSON.stringify(inComingBody),
      incomingSignature,
      webHookSecret
    );

    if (!isValidSignature) {
      res.status(500).json({ status: false, message: "Invalid signature" });
      return;
    }

    const event = inComingBody.event;
    const paymentData = inComingBody.payload.payment.entity;

    if (event !== "payment.captured") {
      res.status(400).json({ status: false, message: "Payment Unsuccessfull" });
    }

    const updatePaymentInfo = await prisma.enrolledStudents.create({
      data: {
        invoice_name: `invoice_${
          Date.now().toString().slice(0, 4) + incomingSignature.slice(0, 4)
        }`,
        order_id: paymentData.order_id,
        amount: paymentData.amount,
        currency: paymentData.currency,
        payment_status: "CAPTURED",
        studentId: paymentData.notes.userId,
        email: paymentData.email,
        contact: paymentData.contact,
        created_at: paymentData.created_at.toString(),
        courseId: paymentData.notes.courseId,
      },
    });

    res
      .status(200)
      .json({ status: true, message: "Webhook processed successfully" });
  } catch (error) {
    console.error(error);
  }
};

export const handleGetPaymentDetails = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    const { courseId } = req.params;

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged in" });
      return;
    }

    const isAlreadyPurchased = await prisma.enrolledStudents.findFirst({
      where: {
        studentId: userId,
        courseId: courseId,
      },
      select: {
        payment_status: true,
      },
    });

    if (!isAlreadyPurchased) {
      res
        .status(400)
        .json({ status: false, message: "You have not Bought this course" });
      return;
    }

    res.status(200).json({
      status: true,
      message: "Your Payment was successfull",
      data: isAlreadyPurchased,
    });
  } catch (error) {
    console.error(error);
  }
};
