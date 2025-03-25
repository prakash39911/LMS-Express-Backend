"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cloudinaryController_1 = require("../controller/cloudinaryController");
const router = (0, express_1.Router)();
router.route("/").post(cloudinaryController_1.deleteFromCloudinary);
exports.default = router;
