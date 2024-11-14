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

    name: "Црвено Смути",
    desc: "банана, млеко, шумско овошје, бадеми",
    price: 160,
  },
  {
    key: 3,

    name: "Протеинско Смути",
    desc: "протеин, млеко, банана, какао, путер од кикирики, цимет",
    price: 180,
  },
  {
    key: 4,

    name: "Пина Колада Смути",
    desc: "ананас, банана, кокос, млеко",
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
