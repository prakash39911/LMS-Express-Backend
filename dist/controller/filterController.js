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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterPresetForUser = void 0;
exports.handleCreatePreset = handleCreatePreset;
const express_1 = require("@clerk/express");
const prisma_1 = __importDefault(require("../lib/prisma"));
function handleCreatePreset(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = (0, express_1.getAuth)(req);
            const { filterState, presetName, currentPresetName: PrevName } = req.body;
            if (!userId) {
                res.status(400).json({ status: false, message: "You are not logged in" });
                return;
            }
            const isFilterPresetCreatedEver = yield prisma_1.default.filterPreset.findUnique({
                where: {
                    userId,
                },
                select: {
                    id: true,
                },
            });
            if (!isFilterPresetCreatedEver) {
                const result = yield prisma_1.default.filterPreset.create({
                    data: {
                        userId,
                        SavedFilterData: {
                            create: {
                                name: presetName,
                                selectedRating: filterState.selectedRating,
                                priceRange: filterState.priceRange,
                            },
                        },
                    },
                    select: {
                        SavedFilterData: {
                            select: {
                                id: true,
                                name: true,
                                selectedRating: true,
                                priceRange: true,
                            },
                        },
                    },
                });
                res.status(200).json({
                    status: true,
                    data: result,
                    message: "Preset Saved Successfully",
                });
                return;
            }
            if (isFilterPresetCreatedEver) {
                const count = yield prisma_1.default.savedFilterData.findMany({
                    where: {
                        FilterPresetId: isFilterPresetCreatedEver.id,
                    },
                });
                if (count.length >= 6) {
                    res
                        .status(400)
                        .json({ status: false, message: "You can create upto 5 Preset" });
                    return;
                }
                const isPresetNameExists = yield prisma_1.default.savedFilterData.findFirst({
                    where: {
                        name: PrevName,
                    },
                });
                if (!isPresetNameExists) {
                    const result = yield prisma_1.default.savedFilterData.create({
                        data: {
                            name: presetName,
                            selectedRating: filterState.selectedRating,
                            priceRange: filterState.priceRange,
                            FilterPresetId: isFilterPresetCreatedEver.id,
                        },
                    });
                    res.status(200).json({
                        status: true,
                        data: result,
                        message: "Preset Saved Successfully",
                    });
                }
                if (isPresetNameExists) {
                    const result = yield prisma_1.default.savedFilterData.update({
                        where: {
                            id: isPresetNameExists.id,
                        },
                        data: {
                            name: presetName,
                            selectedRating: filterState.selectedRating,
                            priceRange: filterState.priceRange,
                        },
                    });
                    res.status(200).json({
                        status: true,
                        data: result,
                        message: "Preset Updated Successfully",
                    });
                }
            }
        }
        catch (error) {
            res.status(500).json({ status: false, message: "Internal Server Error" });
        }
    });
}
const getFilterPresetForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId) {
            res.status(400).json({ status: false, message: "You are not logged In" });
            return;
        }
        const result = yield prisma_1.default.filterPreset.findFirst({
            where: {
                userId,
            },
            select: {
                SavedFilterData: {
                    select: {
                        id: true,
                        name: true,
                        priceRange: true,
                        selectedRating: true,
                    },
                },
            },
        });
        if (!result) {
            res
                .status(400)
                .json({ status: false, message: "No filter preset found" });
            return;
        }
        res.status(200).json({
            status: true,
            message: "Data Fetched Successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});
exports.getFilterPresetForUser = getFilterPresetForUser;
