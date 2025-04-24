import { Router } from "express";
import {
  handlecloudinaryWebhookForTranscription,
  handleGenerateSummary,
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
export default router;
