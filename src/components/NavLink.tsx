import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const isActive = router.pathname === href; // 检查是否为当前页面
  const baseClass =
    "text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold";
  const activeClass = "text-blue-800 underline";

  return (
    <Link href={href} className={`${baseClass} ${isActive ? activeClass : ""}`}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="flex space-x-4 bg-gray-100 p-4 rounded-md shadow-md">
      <NavLink href="/dashboard">Dashboard</NavLink>
      <NavLink href="/about">About</NavLink>
    </nav>
  );
}
