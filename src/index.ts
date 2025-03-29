import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import courseRoute from "./routes/courseRoutes";
import { clerkMiddleware } from "@clerk/express";
import cloudinarySignatureRoute from "./routes/signatureRoute";
import cloudinaryRoute from "./routes/cloudinaryRoute";
import userRoute from "./routes/userRoute";
import paymentRoute from "./routes/paymentRoute";
import filterRoute from "./routes/filterRoute";

dotenv.config();

const app = express();

app.use(cors());
app.use((req, res, next) => {
  if (req.path === "/api/payment") {
    return next(); // Skip JSON parsing for this route
  }
  return express.json()(req, res, next);
});
app.use(clerkMiddleware());

app.use("/api/sign-video", cloudinarySignatureRoute);
app.use("/api/deleteFromCloudinary", cloudinaryRoute);
app.use("/api/course", courseRoute);
app.use("/api/updateuserdata", userRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/advancedFilter", filterRoute);

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
