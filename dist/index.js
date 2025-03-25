"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const courseRoutes_1 = __importDefault(require("../src/routes/courseRoutes"));
const express_2 = require("@clerk/express");
const signatureRoute_1 = __importDefault(require("../src/routes/signatureRoute"));
const cloudinaryRoute_1 = __importDefault(require("../src/routes/cloudinaryRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const paymentRoute_1 = __importDefault(require("./routes/paymentRoute"));
const filterRoute_1 = __importDefault(require("./routes/filterRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_2.clerkMiddleware)());
app.use("/api/sign-video", signatureRoute_1.default);
app.use("/api/deleteFromCloudinary", cloudinaryRoute_1.default);
app.use("/api/course", courseRoutes_1.default);
app.use("/api/updateuserdata", userRoute_1.default);
app.use("/api/payment", paymentRoute_1.default);
app.use("/api/advancedFilter", filterRoute_1.default);
// app.get("/protected", requireAuth(), async (req, res) => {
//   // Use `getAuth()` to get the user's `userId`
//   const { userId } = getAuth(req);
//   // Use Clerk's JavaScript Backend SDK to get the user's User object
//   if (!userId) res.json({ data: null, message: "There is no user loggedIn" });
//   const user = await clerkClient.users.getUser(userId as string);
//   res.json({ data: user, message: "User Data retrieved" });
// });
app.listen(process.env.PORT || 8000, () => {
    console.log("Server Started on PORT", process.env.PORT);
});
