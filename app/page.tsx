import Sidenav from "./ui/Sidenav";
import prisma from "@/prisma/db";

async function fetchUsers() {
  const response = await fetch("https://6549f6b1e182221f8d523a44.mockapi.io/api/Users");
  const data = await response.json();
  return data;
}

async function addUsers(user) {
  const user = await prisma.user.create({
    data: {
      id:"2",
      name:"Matti",
      email:"Matti@hotmail.com",
      image_url:"ulr.example.com"
    }
  })
}

export default async function Home() {
  const users = await fetchUsers();
  await addUsers()
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
