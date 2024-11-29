"use client";
import { useState } from "react";

export default function ListLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <h3 className="title2">用户小明-ListLayout</h3>
      <button className="btn" onClick={() => setCount(count + 1)}>
        用户小明：{count}
      </button>
      {children}
    </div>
  );
}
