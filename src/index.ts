import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import courseRoute from "../src/routes/courseRoutes";
import {
  clerkClient,
  clerkMiddleware,
  getAuth,
  requireAuth,
} from "@clerk/express";
import cloudinarySignatureRoute from "../src/routes/signatureRoute";
import cloudinaryRoute from "../src/routes/cloudinaryRoute";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/sign-video", cloudinarySignatureRoute);
app.use("/api/deleteFromCloudinary", cloudinaryRoute);
app.use("/api/course", courseRoute);

app.get("/protected", requireAuth(), async (req, res) => {
  // Use `getAuth()` to get the user's `userId`
  const { userId } = getAuth(req);

  // Use Clerk's JavaScript Backend SDK to get the user's User object
  if (!userId) res.json({ data: null, message: "There is no user loggedIn" });

  const user = await clerkClient.users.getUser(userId as string);

  res.json({ data: user, message: "User Data retrieved" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server Started on PORT", process.env.PORT);
});
