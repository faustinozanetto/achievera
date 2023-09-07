-- DropForeignKey
ALTER TABLE "DailyRegistry" DROP CONSTRAINT "DailyRegistry_userId_fkey";

-- AddForeignKey
ALTER TABLE "DailyRegistry" ADD CONSTRAINT "DailyRegistry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
