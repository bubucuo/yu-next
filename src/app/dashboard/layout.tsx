"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  const [count, setCount] = React.useState(0);
  return (
    <section className="box">
      <h1 className="title2">DashboardLayout</h1>
      <button onClick={() => setCount(count + 1)} className="btn">
        DashboardLayout:{count}
      </button>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      {children}
    </section>
  );
}
