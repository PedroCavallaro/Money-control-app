-- CreateTable
CREATE TABLE "FixedExpenses" (
    "id" TEXT NOT NULL,
    "entry" DOUBLE PRECISION NOT NULL,
    "spent" DOUBLE PRECISION NOT NULL,
    "leisure" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FixedExpenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovementType" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "MovementType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RelativeExpenses" (
    "id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "movementTypeId" TEXT NOT NULL,

    CONSTRAINT "RelativeExpenses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RelativeExpenses" ADD CONSTRAINT "RelativeExpenses_movementTypeId_fkey" FOREIGN KEY ("movementTypeId") REFERENCES "MovementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
