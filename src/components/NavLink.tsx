"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isActive = pathname === href; // 检查是否为当前页面
  const baseClass =
    "text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold";
  const activeClass = "text-red-500 underline";

  return (
    <Link href={href} className={`${baseClass} ${isActive ? activeClass : ""}`}>
      {children}
    </Link>
  );
}
