import { Router } from "express";
import {
  createCourseHandler,
  getAllCourse,
  getCourseForId,
  getCoursesforStudent,
  getCoursesforTeacher,
  getParticularVideoUrl,
  isLoggedInTeacherOwner,
  playCourseForId,
} from "../controller/courseController";

const router = Router();

router.route("/create").post(createCourseHandler);
router.route("/getAllCourse").get(getAllCourse);
router.route("/detail/:courseId").get(getCourseForId);
router.route("/learn/:courseId").get(playCourseForId);
router.route("/video/:videoSectionId").get(getParticularVideoUrl);
router.route("/getCourseForteacher").get(getCoursesforTeacher);
router.route("/getCourseForStudent").get(getCoursesforStudent);
router.route("/isOwnerOfVideo/:courseId").get(isLoggedInTeacherOwner);

export default router;
