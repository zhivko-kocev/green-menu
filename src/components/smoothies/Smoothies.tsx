import Products from "../display/Product";

const data = [
  {
    key: 1,
    name: "Детокс Смути",
    desc: "јаболко, киви, спанаќ, кокосово млеко, ѓумбир",
    price: 160,
  },
  {
    key: 2,

    name: "Детокс Смути",
    desc: "јаболко, киви, спанаќ, кокосово млеко, ѓумбир",
    price: 160,
  },
  {
    key: 3,

    name: "Детокс Смути",
    desc: "јаболко, киви, спанаќ, кокосово млеко, ѓумбир",
    price: 160,
  },
  {
    key: 4,

    name: "Детокс Смути",
    desc: "јаболко, киви, спанаќ, кокосово млеко, ѓумбир",
    price: 160,
  },
];

function Smoothies() {
  return (
    <>
      <Products data={data} />
    </>
  );
}

export default Smoothies;
