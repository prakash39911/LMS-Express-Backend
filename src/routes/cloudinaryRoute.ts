import { Router } from "express";
import { deleteFromCloudinary } from "../controller/cloudinaryController";

const router = Router();

router.route("/").post(deleteFromCloudinary);

export default router;
