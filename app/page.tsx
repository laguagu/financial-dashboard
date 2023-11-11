import Sidenav from "./ui/sidenav";

async function fetchUsers() {
  const response = await fetch(
    "https://6549f6b1e182221f8d523a44.mockapi.io/api/Users"
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const users = await fetchUsers();
  console.log("Käyttäjät:", users);
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
