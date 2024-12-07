"use client";
import { Suspense } from "react";
import { useState } from "react";

export default function Refresh({ username }) {
  const [user, setUser] = useState(username);
  const refresh = async () => {
    const { results } = await fetch("https://randomuser.me/api/").then((res) =>
      res.json()
    );
    const username = results[0].name.first;
    setUser(username);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <p>{user}</p>
      <button className="btn" onClick={refresh}>
        refresh
      </button>
    </Suspense>
  );
}
