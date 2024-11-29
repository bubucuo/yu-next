export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="box">
      <h2 className="title2">RootTemplate</h2>
      {children}
    </div>
  );
}
