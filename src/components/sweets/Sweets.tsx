import Products from "../display/Product";

const data = [
  {
    key: 1,
    name: "Протеински бомбици",
    desc: "протеин, какао, путер од кикирики, јаворов сируп",
    price: 60,
  },
  {
    key: 2,

    name: "Банана бомбици",
    desc: "протеин, банана, плазма, бадем",
    price: 50,
  },
  {
    key: 3,

    name: "Посни бомбици",
    desc: "сончоглед, какао, мед",
    price: 40,
  },
];

function Sweets() {
  return (
    <>
      <Products data={data} />
    </>
  );
}

export default Sweets;
