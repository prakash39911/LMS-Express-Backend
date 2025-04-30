import { Router } from "express";
import {
  handleChat,
  handleGetConversationHistory,
} from "../controller/chatController";

const router = Router();

router.route("/").post(handleChat);
router.route("/getChatHistory").get(handleGetConversationHistory);

export default router;
