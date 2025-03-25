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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRating = exports.isAlreadyPurchased = exports.isLoggedInTeacherOwner = exports.getCoursesforStudent = exports.getCoursesforTeacher = exports.getParticularVideoUrl = exports.getAllCourse = exports.createCourseHandler = void 0;
exports.getCourseForId = getCourseForId;
exports.playCourseForId = playCourseForId;
const sharedlms_1 = require("@prakash39911/sharedlms");
const prisma_1 = __importDefault(require("../lib/prisma"));
const express_1 = require("@clerk/express");
const createCourseHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId) {
            throw new Error("User is not Authorized");
        }
        // const user = await clerkClient.users.getUser(userId);
        // console.log("Logged in User Info", user);
        const _a = req.body, { ownerName } = _a, data = __rest(_a, ["ownerName"]);
        console.log("owner name", ownerName);
        console.log("remaining data", data);
        const validated = sharedlms_1.createCourseFormSchema.safeParse(data);
        if (!validated.success) {
            throw new Error("Validation failed on the backend");
        }
        const { title, description, price, section, main_image } = validated.data;
        const isCourseCreated = yield prisma_1.default.course.create({
            data: {
                owner: userId,
                title,
                description,
                price,
                main_image,
                ownerName: ownerName,
                section: {
                    create: section.map((eachSection) => ({
                        sectionName: eachSection.sectionName,
                        videoSection: {
                            create: eachSection.videoSection.map((eachVideoSection) => ({
                                video_title: eachVideoSection.video_title,
                                video_url: eachVideoSection.video_url,
                                video_public_id: eachVideoSection.video_public_id,
                                video_thumbnailUrl: eachVideoSection.video_thumbnailUrl,
                                video_duration: eachVideoSection.video_duration,
                            })),
                        },
                    })),
                },
            },
            include: {
                section: {
                    include: {
                        videoSection: true,
                    },
                },
            },
        });
        res.status(200).json({
            message: "Course Created Successfully",
            course: isCourseCreated,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createCourseHandler = createCourseHandler;
const getAllCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ratings, priceRange } = req.query;
    const ratingsString = typeof ratings === "string" ? ratings : "";
    const ratingArray = ratingsString ? ratingsString.split(",").map(Number) : [];
    const pricesString = typeof priceRange === "string" ? priceRange : "";
    const [minPrice, maxPrice] = pricesString.split(",");
    try {
        const whereConditions = [];
        if (minPrice) {
            whereConditions.push({ price: { gte: parseInt(minPrice) } });
        }
        if (maxPrice) {
            whereConditions.push({ price: { lte: parseInt(maxPrice) } });
        }
        if (ratingArray.length > 0) {
            whereConditions.push({
                rating: {
                    some: {
                        value: { in: ratingArray },
                    },
                },
            });
        }
        const courses = yield prisma_1.default.course.findMany({
            where: {
                AND: whereConditions,
            },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                main_image: true,
                rating: {
                    select: {
                        value: true,
                    },
                },
                section: {
                    select: {
                        sectionName: true,
                        videoSection: {
                            select: {
                                video_public_id: true,
                                video_title: true,
                                video_url: true,
                                video_thumbnailUrl: true,
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json({ message: "All courses retrieved", data: courses });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getAllCourse = getAllCourse;
function getCourseForId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { courseId } = req.params;
            const course = yield prisma_1.default.course.findUnique({
                where: {
                    id: courseId,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    price: true,
                    main_image: true,
                    enrolledStudents: true,
                    updatedAt: true,
                    rating: {
                        select: {
                            id: true,
                            value: true,
                            userId: true,
                        },
                    },
                    section: {
                        select: {
                            id: true,
                            sectionName: true,
                            videoSection: {
                                select: {
                                    id: true,
                                    video_public_id: true,
                                    video_title: true,
                                    video_duration: true,
                                },
                            },
                        },
                    },
                },
            });
            res.status(200).json({
                status: true,
                message: "Course retrieved successfully",
                data: course,
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ status: false, message: "Failed to Load data" });
        }
    });
}
function playCourseForId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { courseId } = req.params;
            const { userId } = (0, express_1.getAuth)(req);
            if (!userId) {
                res.status(400).json({ status: false, message: "You are not Logged In" });
                return;
            }
            const isUserEnrolled = yield prisma_1.default.enrolledStudents.findFirst({
                where: {
                    studentId: userId,
                    courseId: courseId,
                },
            });
            if (!isUserEnrolled) {
                res
                    .status(400)
                    .json({ status: false, message: "Please Buy this course to continue" });
                return;
            }
            const course = yield prisma_1.default.course.findUnique({
                where: {
                    id: courseId,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    price: true,
                    main_image: true,
                    enrolledStudents: true,
                    updatedAt: true,
                    rating: {
                        select: {
                            id: true,
                            value: true,
                            userId: true,
                        },
                    },
                    section: {
                        select: {
                            id: true,
                            sectionName: true,
                            videoSection: {
                                select: {
                                    id: true,
                                    video_public_id: true,
                                    video_title: true,
                                    video_duration: true,
                                },
                            },
                        },
                    },
                },
            });
            res.status(200).json({
                status: true,
                message: "Course retrieved successfully",
                data: course,
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ status: false, message: "Failed to Load data" });
        }
    });
}
const getParticularVideoUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { videoSectionId } = req.params;
        if (!videoSectionId)
            throw new Error("Id not found");
        const videoUrl = yield prisma_1.default.videoSection.findUnique({
            where: {
                id: videoSectionId,
            },
            select: {
                id: true,
                video_public_id: true,
            },
        });
        if (!videoUrl)
            throw new Error("Video not found");
        res.status(200).json({ status: "success", data: videoUrl });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getParticularVideoUrl = getParticularVideoUrl;
const getCoursesforTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId)
            throw new Error("You are not authorized");
        const courses = yield prisma_1.default.course.findMany({
            where: {
                owner: userId,
            },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                main_image: true,
                rating: {
                    select: {
                        value: true,
                    },
                },
                section: {
                    select: {
                        sectionName: true,
                        videoSection: {
                            select: {
                                video_public_id: true,
                                video_title: true,
                                video_url: true,
                                video_thumbnailUrl: true,
                            },
                        },
                    },
                },
                enrolledStudents: {
                    select: {
                        id: true,
                    },
                },
            },
        });
        res.status(200).json({ status: true, data: courses });
    }
    catch (error) {
        res.status(500).json({ status: false, message: "Error loading Data" });
    }
});
exports.getCoursesforTeacher = getCoursesforTeacher;
const getCoursesforStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId) {
            res.status(400).json({ status: false, message: "You are not Logged In" });
            return;
        }
        const courseIds = yield prisma_1.default.enrolledStudents.findMany({
            where: {
                studentId: userId,
            },
        });
        if ((courseIds === null || courseIds === void 0 ? void 0 : courseIds.length) === 0) {
            res.status(400).json({
                status: false,
                message: "You Have not Bought any courses yet",
            });
            return;
        }
        const courseIdArray = courseIds.map((eachObj) => eachObj.courseId);
        const courses = yield prisma_1.default.course.findMany({
            where: {
                id: { in: courseIdArray },
            },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                main_image: true,
                rating: {
                    select: {
                        value: true,
                    },
                },
                section: {
                    select: {
                        sectionName: true,
                        videoSection: {
                            select: {
                                video_public_id: true,
                                video_title: true,
                                video_url: true,
                                video_thumbnailUrl: true,
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json({ status: true, data: courses });
    }
    catch (error) {
        res.status(500).json({ status: false, message: "Error loading Data" });
    }
});
exports.getCoursesforStudent = getCoursesforStudent;
const isLoggedInTeacherOwner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId) {
            res.status(400).json({ status: false, message: "You are not Logged In" });
            return;
        }
        const isOwner = yield prisma_1.default.course.findFirst({
            where: { owner: userId, id: courseId },
            select: {
                id: true,
                title: true,
                description: true,
                price: true,
                main_image: true,
                enrolledStudents: true,
                updatedAt: true,
                rating: {
                    select: {
                        id: true,
                        value: true,
                        userId: true,
                    },
                },
                section: {
                    select: {
                        id: true,
                        sectionName: true,
                        videoSection: {
                            select: {
                                id: true,
                                video_public_id: true,
                                video_title: true,
                                video_duration: true,
                            },
                        },
                    },
                },
            },
        });
        if (!isOwner) {
            res
                .status(400)
                .json({ status: false, message: "You are not authorized" });
            return;
        }
        res.status(200).json({ status: true, data: isOwner });
    }
    catch (error) {
        res.status(500).json({ status: false, message: "Unable to fetch" });
    }
});
exports.isLoggedInTeacherOwner = isLoggedInTeacherOwner;
const isAlreadyPurchased = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const { userId } = (0, express_1.getAuth)(req);
        if (!userId) {
            res.status(400).json({ status: false, message: "You are not logged in" });
            return;
        }
        const hasPurchasedThisCourse = yield prisma_1.default.enrolledStudents.findFirst({
            where: {
                courseId: courseId,
                studentId: userId,
            },
        });
        if (!hasPurchasedThisCourse) {
            res.json({
                status: false,
                message: "You have not purchased this course",
            });
            return;
        }
        res
            .status(200)
            .json({ status: true, message: "You have bought this course already" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Failed to Fetch Data, Internal Server Error",
        });
    }
});
exports.isAlreadyPurchased = isAlreadyPurchased;
const addRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = (0, express_1.getAuth)(req);
        const { courseId } = req.params;
        const { value } = req.body;
        console.log("Request is receiving", userId, courseId, value);
        if (!userId) {
            res.status(400).json({ status: false, message: "You are not LoggedIn" });
            return;
        }
        const result = yield prisma_1.default.rating.create({
            data: {
                userId,
                courseId,
                value: value,
            },
        });
        res
            .status(200)
            .json({ status: true, message: "Feedback submitted Successfully" });
    }
    catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
});
exports.addRating = addRating;
