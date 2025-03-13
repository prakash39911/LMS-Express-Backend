import { Router } from "express";
import {
  createCourseHandler,
  getAllCourse,
  getCourseForId,
} from "../controller/courseController";
import { requireAuth } from "@clerk/express";

const router = Router();

router.route("/create").post(createCourseHandler);
router.route("/getAllCourse").get(getAllCourse);
router.route("/detail/:courseId").get(getCourseForId);

export default router;
