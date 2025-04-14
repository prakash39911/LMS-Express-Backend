import { Router } from "express";
import {
  addRating,
  createCourseHandler,
  getAllCourse,
  getCourseForId,
  getCoursesforStudent,
  getCoursesforTeacher,
  getParticularVideoUrl,
  handleCreateCourseProgress,
  isAlreadyPurchased,
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
router.route("/isAlreadyPurchased/:courseId").get(isAlreadyPurchased);
router.route("/giveRating/:courseId").post(addRating);
router
  .route("/createCourseProgress/:courseId")
  .post(handleCreateCourseProgress);

export default router;
