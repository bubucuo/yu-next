"use client";
import { useState } from "react";
import "./style.module.css";
import { useRouter } from "next/navigation";
import { Button, Table } from "antd";

export default function Page() {
  const [count, setCount] = useState(0);

  const router = useRouter();
  return (
    <div className="box main">
      <h3 className="title2">list</h3>
      <Button className="btn" onClick={() => setCount(count + 1)}>
        {count}
      </Button>

      <button className="btn" onClick={() => router.push("list/detail")}>
        go detail
      </button>
    </div>
  );
}
