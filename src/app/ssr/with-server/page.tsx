import { NavLink } from "src/components/NavLink";

export default async function ServerComponentWithServer() {
  const { results } = await fetch("https://randomuser.me/api/").then((res) =>
    res.json()
  );

  const username = results[0].name.first;

  return (
    <div>
      <h3>ServerComponentWithServer</h3>
      <p>{username}</p>

      <NavLink href={`with-server/${username}`}>Navigate to details</NavLink>
    </div>
  );
}
