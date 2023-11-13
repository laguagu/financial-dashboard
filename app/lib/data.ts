import prisma from "@/prisma/db";
import { User } from "@prisma/client";

export async function saveUsersToDatabase(users: User[]): Promise<void> {
  const promises = users.map((user) => {
    return prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: {
        id: user.id,
        name: user.name,
        email: user.email,
        image_url: user.image_url,
      },
    });
  });
  await Promise.all(promises);
  console.log("Users saved to database");
}

export async function fetchUsersFromDatabase(): Promise<User[]> {
  const users = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return users;
}
