import express from "express";
import signatureHandler from "../controller/signatureController";

const router = express.Router();

router.route("/").post(signatureHandler);

export default router;
