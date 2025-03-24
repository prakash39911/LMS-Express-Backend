-- CreateTable
CREATE TABLE "FilterPreset" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FilterPreset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedFilterData" (
    "id" TEXT NOT NULL,
    "selectedRating" TEXT[],
    "priceRange" INTEGER[],
    "FilterPresetId" TEXT NOT NULL,

    CONSTRAINT "SavedFilterData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavedFilterData" ADD CONSTRAINT "SavedFilterData_FilterPresetId_fkey" FOREIGN KEY ("FilterPresetId") REFERENCES "FilterPreset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
