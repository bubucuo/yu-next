"use client";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(
    "%c [ DashboardLayout pathname ]-10",
    "font-size:13px; background:pink; color:#bf2c9f;",
    pathname
  );
  return (
    <section className="border-2 border-red-500 m-4 p-4">
      <h1>DashboardLayout</h1>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      {children}
    </section>
  );
}
