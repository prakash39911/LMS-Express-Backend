import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import courseRoute from "./routes/courseRoutes";
import { clerkMiddleware } from "@clerk/express";
import cloudinarySignatureRoute from "./routes/signatureRoute";
import cloudinaryRoute from "./routes/cloudinaryRoute";
import userRoute from "./routes/userRoute";
import paymentRoute from "./routes/paymentRoute";
import filterRoute from "./routes/filterRoute";
import { checkConnection, createIndex } from "./lib/elasticClient";
import chatRoute from "./routes/chatRoute";
import videoTranscriptRoute from "./routes/videoTranscriptRoute";

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
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Server");
});

app.use("/api/sign-video", cloudinarySignatureRoute);
app.use("/api/deleteFromCloudinary", cloudinaryRoute);
app.use("/api/course", courseRoute);
app.use("/api/updateuserdata", userRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/advancedFilter", filterRoute);
app.use("/api/chat", chatRoute);
app.use("/api/video/transcript", videoTranscriptRoute);

// (async function () {
//   const isConnected = await checkConnection();

//   const indexName = process.env.ELASTIC_PRODUCTION_INDEX;

//   if (!indexName) {
//     throw new Error("Index name is required");
//   }
//   if (isConnected) {
//     await createIndex(indexName);
//   }
// })();

app.listen(process.env.PORT || 8000, async () => {
  console.log("Server Started on PORT", process.env.PORT);
});
