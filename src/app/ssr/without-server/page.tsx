export default async function ServerComponentWithoutServer() {
  const res = await fetch("https://fakestoreapi.com/products/1").then((res) =>
    res.json()
  );
  // ! 注意下面的这个地址，部署的时候，不要部署到线上。因为线上目前还没有这个地址。除非你有。不然就报错了
  // const res = await fetch("http://localhost:3000").then((res) => res.json());
  return (
    <div>
      <h3>ServerComponentWithoutServer</h3>
      <p>{res.title}</p>
    </div>
  );
}
