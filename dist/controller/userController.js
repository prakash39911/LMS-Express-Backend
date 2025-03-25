"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoleHandler = void 0;
const express_1 = require("@clerk/express");
const sharedlms_1 = require("@prakash39911/sharedlms");
const addRoleHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = (0, express_1.getAuth)(req);
    if (!userId) {
        throw new Error("No Logged in user");
    }
    try {
        const data = req.body;
        const validated = sharedlms_1.onBoardingFormSchema.safeParse(data);
        if (!validated.success)
            throw new Error("Validation Failed");
        const { firstname, lastname, role } = validated.data;
        yield express_1.clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                onboardingComplete: true,
                firstName: firstname,
                lastName: lastname,
                role,
            },
        });
        res.status(200).json({ success: true });
    }
    catch (error) {
        throw new Error("Error while updating the User metaData");
    }
});
exports.addRoleHandler = addRoleHandler;
