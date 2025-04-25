import { Router } from "express";
import {
  handlecloudinaryWebhookForTranscription,
  handledeleteGeneratedSummary,
  handleGenerateSummary,
  handleGenerateSummaryPdf,
  handleGetTranscriptionSummary,
  handleSaveTranscriptionSummary,
} from "../controller/cloudinaryController";

const router = Router();

router.route("/").post(handlecloudinaryWebhookForTranscription);
router.route("/summary").post(handleGenerateSummary);
router
  .route("/getTranscriptionSummaryData")
  .post(handleGetTranscriptionSummary);
router.route("/saveSummary").post(handleSaveTranscriptionSummary);
router.route("/delete").post(handledeleteGeneratedSummary);
router.route("/generatePdf").post(handleGenerateSummaryPdf);
export default router;
