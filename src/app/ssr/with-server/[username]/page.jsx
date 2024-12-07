export default async function DynamicUserName(props) {
  const { username } = await props.params;

  const { results } = await fetch("https://randomuser.me/api/").then((res) =>
    res.json()
  );

  const newUserName = results[0].name.first;

  return (
    <div className="box">
      <h3>DynamicUserName</h3>
      <p>username from last page: {username}</p>
      <p>newUserName: {newUserName}</p>
    </div>
  );
}
