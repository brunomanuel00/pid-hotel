export default function TableRoom() {
  const hab = [
    { precio: 1123, num: 12 },
    { precio: 1123, num: 1 },
    { precio: 1123, num: 2 },
    { precio: 1123, num: 18 },
    { precio: 1123, num: 15 },
    { precio: 1123, num: 85 },
    { precio: 1123, num: 65 },
    { precio: 1123, num: 14 },
    { precio: 1123, num: 15 },
    { precio: 1123, num: 16 },
  ];
  return (
    <>
      <h1>Hello Table Room</h1>
      {hab.map((item, index) => (
        <p key={index}>
          {item.num} {item.precio}
        </p>
      ))}
    </>
  );
}
