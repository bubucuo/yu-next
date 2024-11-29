"use client";

import React from "react";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = React.useState(0);
  return (
    <div className="box">
      <h2 className="title2">DashboardTemplate</h2>
      <button onClick={() => setCount(count + 1)} className="btn">
        DashboardTemplate:{count}
      </button>
      {children}
    </div>
  );
}
