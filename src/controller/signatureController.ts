import { Request, Response } from "express";
import { cloudinary } from "../lib/Cloudinary";

const signatureHandler = async (req: Request, res: Response) => {
  const { paramsToSign } = req.body;

  const signature = cloudinary.v2.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET as string
  );

  res.json({ signature });
};

export default signatureHandler;
