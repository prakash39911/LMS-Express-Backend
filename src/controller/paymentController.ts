import { Request, Response } from "express";
import { razorPayInstance } from "../lib/razorpay";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
import prisma from "../lib/prisma";
import { getAuth } from "@clerk/express";

export const handleCreateOrder = async (req: Request, res: Response) => {
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

    const response = await razorPayInstance.orders.create(options);

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

export const handleVerifyPayment = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);
  console.log("is User Id", userId);

  if (!userId) {
    throw new Error("User is not Authorized");
  }

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    courseId,
  } = req.body;

  const secret = process.env.RZPAY_SECRET_KEY!;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  try {
    const isValidSignature = validateWebhookSignature(
      body,
      razorpay_signature,
      secret
    );

    if (isValidSignature) {
      // Update the order with payment details

      await prisma.enrolledStudents.create({
        data: {
          courseId: courseId,
          studentId: userId,
          order_id: razorpay_order_id,
          payment_id: razorpay_payment_id,
        },
      });

      console.log("Payment verification successful");
      res.status(200).json({ status: true });
    } else {
      res.status(400).json({ status: false });
      console.log("Payment verification failed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Error verifying payment" });
  }
};
