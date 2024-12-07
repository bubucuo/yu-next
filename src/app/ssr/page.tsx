import Refresh from "../../components/Refresh";

export default async function SSR() {
  const { results } = await fetch("https://randomuser.me/api/").then((res) =>
    res.json()
  );
  const username = results[0].name.first;

  return (
    <div>
      <h3>SSR</h3>
      <p>ssr-{username}</p>
      <Refresh username={username} />
    </div>
  );
}
