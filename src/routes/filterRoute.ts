import { Router } from "express";
import {
  getFilterPresetForUser,
  handleCreatePreset,
} from "../controller/filterController";

const router = Router();

router.route("/createPreset").post(handleCreatePreset);
router.route("/getFilterPresetForUser").get(getFilterPresetForUser);

export default router;
