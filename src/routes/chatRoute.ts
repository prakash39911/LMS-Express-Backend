import { Router } from "express";
import { handleChat } from "../controller/chatController";

const router = Router();

router.route("/").post(handleChat);

export default router;
