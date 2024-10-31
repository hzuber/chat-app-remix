import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function clearAll() {
  prisma.$connect;
  await prisma.message.deleteMany();
  await prisma.userChat.deleteMany();
  await prisma.chat.deleteMany();
  await prisma.user.deleteMany()
}

main()
  .then(async () => {
    await clearAll()
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });