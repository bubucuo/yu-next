export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <ul>
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      {posts.map((post: any) => (
        <li key={post.id} className="m-2">
          {post.title}
        </li>
      ))}
    </ul>
  );
}

// "use client";

// import { useState, useEffect } from "react";

// export default function Posts() {
//   const [posts, setPosts] = useState(null);

//   useEffect(() => {
//     async function fetchPosts() {
//       const res = await fetch("https://api.vercel.app/blog");
//       const data = await res.json();
//       setPosts(data);
//     }
//     fetchPosts();
//   }, []);

//   if (!posts) return <div>Loading...</div>;

//   console.log(
//     "%c [  ]-35",
//     "font-size:13px; background:pink; color:#bf2c9f;",
//     posts
//   );

//   //   return (
//   //     <ul>
//   //       {/* {posts.map((post) => (
//   //         <li key={post.id}>{post.title}</li>
//   //       ))} */}
//   //     </ul>
//   //   );
// }
