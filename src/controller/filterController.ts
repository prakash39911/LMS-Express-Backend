import { getAuth } from "@clerk/express";
import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function handleCreatePreset(req: Request, res: Response) {
  try {
    const { userId } = getAuth(req);
    const { filterState, presetName, currentPresetName: PrevName } = req.body;

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged in" });
      return;
    }

    const isFilterPresetCreatedEver = await prisma.filterPreset.findUnique({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    if (!isFilterPresetCreatedEver) {
      const result = await prisma.filterPreset.create({
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
      const count = await prisma.savedFilterData.findMany({
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

      const isPresetNameExists = await prisma.savedFilterData.findFirst({
        where: {
          name: PrevName,
        },
      });

      if (!isPresetNameExists) {
        const result = await prisma.savedFilterData.create({
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
        const result = await prisma.savedFilterData.update({
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
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
}

export const getFilterPresetForUser = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(400).json({ status: false, message: "You are not logged In" });
      return;
    }

    const result = await prisma.filterPreset.findFirst({
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
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
