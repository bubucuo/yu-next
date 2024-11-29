import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="border">
      <h3>about： 设置title</h3>
    </div>
  );
}
