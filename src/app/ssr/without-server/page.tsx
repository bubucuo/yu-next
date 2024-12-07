export default async function ServerComponentWithoutServer() {
  // const res = await fetch("https://fakestoreapi.com/products/1").then((res) =>
  //   res.json()
  // );
  const res = await fetch("http://localhost:3000").then((res) => res.json());
  return (
    <div>
      <h3>ServerComponentWithoutServer</h3>
      <p>{res.title}</p>
    </div>
  );
}
