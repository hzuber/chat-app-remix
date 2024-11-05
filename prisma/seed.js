import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  prisma.$connect;
  const alice = await prisma.user.upsert({
    where: { id: "c8941aae-484c-4ea7-ac83-be12012c19cc" },
    update: {},
    create: {
      id: "c8941aae-484c-4ea7-ac83-be12012c19cc",
      username: "Alice In Chains",
      email: "alice@prisma.io",
      iconBg: null,
      iconIcon: null,
      password: "$2y$10$mAznuGIp1AhqK0dxILP4HegEd1nbsjwppSZIhBRfgEKmfUpaBy5Ce",
    },
  });
  //pw = bobsburgers
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {},
    create: {
      id: "6707ef5a-e2ff-45b2-a90f-f8446a4f8ef7",
      email: "bob@prisma.io",
      username: "Bob Belcher",
      password: "$2y$10$4dfc76vAj9QffDJFhxy2AO.gnr54TLObRq0/TEqtn7g6VrdC9bRBO",
      iconBg: null,
      iconIcon: null,
    },
  });

  //pw = milksteak
  const charlie = await prisma.user.upsert({
    where: { email: "charlieday@prisma.io" },
    update: {},
    create: {
      id: "740472ba-d47c-4304-85a5-b8c5e79fe4b4",
      email: "charlieday@prisma.io",
      username: "Green Man",
      password: "$2y$10$a5fDZcKQU8c1VjgxdyBHbuKOwoRho7uGq7l9wxiH1BeltDKNuMasu",
      iconBg: null,
      iconIcon: null,
    },
  });
  const bobandcharlie = await prisma.chat.upsert({
    where: { id: "12e7ce49-827f-481e-a137-27142d24778b" },
    update: {},
    create: {
      id: "12e7ce49-827f-481e-a137-27142d24778b",
      chatName: null,
      iconBg: null,
      iconIcon: null,
      description: null,
      type: "private_chat",
      lastSent: null,
    },
  });
  const aliceandbob = await prisma.chat.upsert({
    where: { id: "576822fe-e592-4907-adf0-3724e3a28c30" },
    update: {},
    create: {
      id: "576822fe-e592-4907-adf0-3724e3a28c30",
      chatName: null,
      iconBg: null,
      iconIcon: null,
      description: null,
      type: "private_chat",
      lastSent: null,
    },
  });
  const aliceChat1 = await prisma.userChat.upsert({
    where: { id: "1d945ba1-9601-4eba-b422-4680f5c997c3" },
    update: {},
    create: {
      id: "1d945ba1-9601-4eba-b422-4680f5c997c3",
      userId: "c8941aae-484c-4ea7-ac83-be12012c19cc",
      chatId: "576822fe-e592-4907-adf0-3724e3a28c30",
      isAdmin: true,
      lastRead: null,
      theme: null,
      deleted: false,
    },
  });
  const bobChat1 = await prisma.userChat.upsert({
    where: { id: "2be8c98b-3333-4b49-af74-4ff7dce54978" },
    update: {},
    create: {
      id: "2be8c98b-3333-4b49-af74-4ff7dce54978",
      userId: "6707ef5a-e2ff-45b2-a90f-f8446a4f8ef7",
      chatId: "576822fe-e592-4907-adf0-3724e3a28c30",
      isAdmin: true,
      lastRead: null,
      theme: null,
      deleted: false,
    },
  });
  const bobChat2 = await prisma.userChat.upsert({
    where: { id: "116c3a16-9ff1-4022-b2f6-8ba6607f850c" },
    update: {},
    create: {
      id: "116c3a16-9ff1-4022-b2f6-8ba6607f850c",
      userId: "6707ef5a-e2ff-45b2-a90f-f8446a4f8ef7",
      chatId: "12e7ce49-827f-481e-a137-27142d24778b",
      isAdmin: true,
      lastRead: null,
      theme: null,
      deleted: false,
    },
  });
  const charlieChat2 = await prisma.userChat.upsert({
    where: { id: "9245f63f-5eea-4ede-86e0-c2ed0a72e00d" },
    update: {},
    create: {
      id: "9245f63f-5eea-4ede-86e0-c2ed0a72e00d",
      userId: "740472ba-d47c-4304-85a5-b8c5e79fe4b4",
      chatId: "12e7ce49-827f-481e-a137-27142d24778b",
      isAdmin: true,
      lastRead: null,
      theme: null,
      deleted: false,
    },
  });
}

async function addLastSent() {
  const alicemessage = await prisma.message.upsert({
    where: { id: "6e90b4e3-e879-42f8-b12b-f25879a53c35" },
    update: {},
    create: {
      id: "6e90b4e3-e879-42f8-b12b-f25879a53c35",
      author: "c8941aae-484c-4ea7-ac83-be12012c19cc",
      date: new Date("2024-10-22 17:29:57.000"),
      chatId: "576822fe-e592-4907-adf0-3724e3a28c30",
      text: "This is the first message in alice and bob's chat",
      dateEdited: null,
      status: "live",
    },
  });
  const updateBobAndAliceChat = await prisma.chat.update({
    where: {
      id: "576822fe-e592-4907-adf0-3724e3a28c30"
    },
    data: {
      lastSent: "6e90b4e3-e879-42f8-b12b-f25879a53c35"
    }
  })
  const updateBobUserChat = await prisma.userChat.update({
    where: {
      id: "2be8c98b-3333-4b49-af74-4ff7dce54978"
    },
    data: {
      lastRead: "6e90b4e3-e879-42f8-b12b-f25879a53c35"
    }
  })
}

main()
  .then(async () => {
    await addLastSent()
  }).then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
