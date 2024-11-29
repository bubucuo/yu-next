import { redirect } from "next/navigation";

async function fetchTeam(id: string) {
  try {
    const res = await fetch(`https://randomuser.me/api`);
    if (!res.ok) {
      console.error("Failed to fetch data");
      return undefined;
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = await params;

  const team = await fetchTeam(id);
  if (!team) {
    // 只有当没有数据时，才会执行重定向
    redirect("/login");
  }

  const first = await team.results[0].name.first;

  return (
    <div className="box">
      <h2 className="title2">Profile: {id}</h2>
      {/* 你可以在这里根据 `team` 渲染更多信息 */}
      <p>{first}</p>
    </div>
  );
}
