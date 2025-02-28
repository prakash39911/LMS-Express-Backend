import { Request, Response } from "express";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";
import { loginUserSchema, registerUserSchema } from "@prakash39911/sharedlms";
import { apiResponse } from "../lib/apiResponse";

const registerUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const validated = registerUserSchema.safeParse(data);

    if (!validated.success) throw new Error("Validation Error");

    const { name, email, password } = validated.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    res
      .status(201)
      .json(new apiResponse("success", "User registration successful", user));
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const validated = loginUserSchema.safeParse(data);

    if (!validated.success) throw new Error("Validation Failure");

    const { email, password } = validated.data;

    const isUserExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!isUserExists)
      throw new Error("User Does not Exists for that Email ID");

    const isPasswordCorrect = bcrypt.compare(password, isUserExists.password);

    if (!isPasswordCorrect) throw new Error("Incorrect password");

    const userData = {
      id: isUserExists.id,
      name: isUserExists.name,
      email: isUserExists.email,
    };

    res
      .status(200)
      .json(new apiResponse("success", "Login Successfull", userData));
  } catch (error) {
    console.error(error);
  }
};

export { registerUser, loginUser };
