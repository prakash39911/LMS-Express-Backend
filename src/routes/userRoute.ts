import express from "express";
import {
  addRoleHandler,
  handleGenerateDownloadPdf,
  handleGetPurchaseDetails,
} from "../controller/userController";

const router = express.Router();

router.route("/addRole").post(addRoleHandler);
router.route("/getPurchaseDetails").get(handleGetPurchaseDetails);
router.route("/generateDownload/:id").get(handleGenerateDownloadPdf);

export default router;
