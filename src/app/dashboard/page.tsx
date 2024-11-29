"use client";

import { usePathname } from "next/navigation";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  const pathname = usePathname();
  console.log(
    "%c [ Page ]-10",
    "font-size:13px; background:pink; color:#bf2c9f;",
    pathname
  );
  return <h1>Hello, Dashboard Page!</h1>;
}
