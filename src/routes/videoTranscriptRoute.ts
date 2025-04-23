import { Router } from "express";
import { handlecloudinaryWebhookForTranscription } from "../controller/cloudinaryController";

const router = Router();

router.route("/").post(handlecloudinaryWebhookForTranscription);

export default router;
