import Sidenav from "./ui/Sidenav";
import { fetchUsersFromDatabase, saveUsersToDatabase } from "./db/data";

interface User {
  id: string;
  name: string;
  email: string;
  image_url: string | null;
}

async function fetchUsersApi(): Promise<User[]> {
  const response = await fetch("https://6549f6b1e182221f8d523a44.mockapi.io/api/Users", {cache: "no-store"});
  const data: User[] = await response.json();
  return data;
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
