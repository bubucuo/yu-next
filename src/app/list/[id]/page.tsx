// ssr

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Card({ params }: any) {
  const { id } = await params;

  return (
    <div>
      <h3>Card</h3>
      <p> {id}</p>
    </div>
  );
}

// csr

// "use client";
// import { useParams } from "next/navigation";

// export default function Card() {
//   const id = useParams().id;

//   return (
//     <div>
//       <h3>Card</h3>
//       <p> {id}</p>
//     </div>
//   );
// }
