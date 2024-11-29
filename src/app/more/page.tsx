"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="border">
      <h3>more</h3>
      <button
        type="button"
        className="btn"
        onClick={() => router.push("/dashboard")}
      >
        go Dashboard
      </button>
    </div>
  );
}
