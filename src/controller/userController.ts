import { Request, Response } from "express";
import { getAuth, clerkClient } from "@clerk/express";
import { onBoardingFormSchema } from "@prakash39911/sharedlms";

export const addRoleHandler = async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    throw new Error("No Logged in user");
  }

  try {
    const data = req.body;

    const validated = onBoardingFormSchema.safeParse(data);

    if (!validated.success) throw new Error("Validation Failed");

    const { firstname, lastname, role } = validated.data;

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        onboardingComplete: true,
        firstName: firstname,
        lastName: lastname,
        role,
      },
    });
    res.status(200).json({ success: true });
  } catch (error) {
    throw new Error("Error while updating the User metaData");
  }
};
