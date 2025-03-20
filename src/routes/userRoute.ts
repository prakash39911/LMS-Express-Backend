import express from "express";
import { addRoleHandler } from "../controller/userController";

const router = express.Router();

router.route("/addRole").post(addRoleHandler);

export default router;
