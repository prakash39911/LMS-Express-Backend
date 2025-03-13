import { Request, Response } from "express";
import { cloudinary } from "../lib/Cloudinary";

export async function deleteFromCloudinary(req: Request, res: Response) {
  try {
    const { public_id } = req.body;

    const result = await cloudinary.v2.uploader.destroy(public_id);

    if (result.result === "ok") {
      res.status(200).json({ message: "Asset Deleted Successfully", result });
    } else {
      res.status(404).json({ message: "Asset not found" });
    }
  } catch (error) {
    console.error("Error deleting asset", error);
    res.status(500).json({ message: "Error while deleting asset" });
  }
}
