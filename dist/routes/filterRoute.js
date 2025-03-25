"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const filterController_1 = require("../controller/filterController");
const router = (0, express_1.Router)();
router.route("/createPreset").post(filterController_1.handleCreatePreset);
router.route("/getFilterPresetForUser").get(filterController_1.getFilterPresetForUser);
exports.default = router;
