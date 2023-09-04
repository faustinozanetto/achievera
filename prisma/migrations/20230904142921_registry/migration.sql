-- CreateTable
CREATE TABLE "DailyRegistry" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyRegistry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DailyRegistry" ADD CONSTRAINT "DailyRegistry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
