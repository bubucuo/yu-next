"use client";
import { useState } from "react";

export default function ListTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <h2 className="title2">ListTemplate</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        用户小明敏感信息：{count}
      </button>
      {children}
    </div>
  );
}

// 函数编程
// curry 化 与组合
