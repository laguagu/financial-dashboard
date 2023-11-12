import Sidenav from "./ui/Sidenav";
import prisma from "@/prisma/db";

interface User {
  id: string;
  name: string;
  email: string;
  image_url: string | null;
}

async function fetchUsersFromDatabase(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}

async function fetchUsersApi(): Promise<User[]> {
  const response = await fetch("https://6549f6b1e182221f8d523a44.mockapi.io/api/Users", {cache: "no-store"});
  const data: User[] = await response.json();
  return data;
}

async function saveUsersToDatabase(users: User[]): Promise<void> {
  const promises = users.map(user => {
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
  console.log('Users saved to database');
}

export default async function Home() {
  const apiUsers = await fetchUsersApi()
  await saveUsersToDatabase(apiUsers)

  const users = await fetchUsersFromDatabase();
  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-grow flex justify-center items-center">
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
