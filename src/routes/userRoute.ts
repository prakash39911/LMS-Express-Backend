import express from "express";
import {
  addRoleHandler,
  handleCourseProgressUpdate,
  handleGenerateDownloadPdf,
  handleGetCourseProgressStatus,
  handleGetDashboardDetails,
  handleGetPurchaseDetails,
} from "../controller/userController";

const router = express.Router();

router.route("/addRole").post(addRoleHandler);
router.route("/getPurchaseDetails").get(handleGetPurchaseDetails);
router.route("/generateDownload/:id").get(handleGenerateDownloadPdf);
router.route("/getDashboardDetails").get(handleGetDashboardDetails);
router.route("/updateCourseProgress").post(handleCourseProgressUpdate);
router.route("/getCourseProgressInfo").get(handleGetCourseProgressStatus);

export default router;
