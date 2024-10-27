const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function theChat() {
  await getPrivateChat([
    "6707ef5a-e2ff-45b2-a90f-f8446a4f8ef7",
    "740472ba-d47c-4304-85a5-b8c5e79fe4b4",
  ]);
}

async function getPrivateChat(members) {
  const userChats = await prisma.user.findMany({
    where: {
      OR: [{ id: members[0] }, { id: members[1] }],
    },
    select: {
      userChats: {
        where: {
          chat: {
            type: "private_chat",
          },
        },
      },
    },
  });
  if (userChats.length !== 2) {
    return [];
  }
  const id = userChats[0].userChats[0].chatId;
  const chat = await prisma.chat
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((res) => res);
  // const db = await readDB();
  // const chat = db.find(
  //   (chat: Chat) =>
  //     chat.type === "private_chat" &&
  //     chat.members.includes(members[0]) &&
  //     chat.members.includes(members[1])
  // );
  console.log(chat);
  return chat;
}

theChat();
