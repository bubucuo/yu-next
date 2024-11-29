"use client";
import { useParams } from "next/navigation";

export default function Product() {
  const id = useParams().id;

  return (
    <div className="box">
      <h2 className="title2">Product: {id}</h2>
    </div>
  );
}
