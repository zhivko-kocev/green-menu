import Products from "../display/Product";

const data = [
  {
    key: 1,
    name: "Јаболко Салата",
    desc: "зелена салата, јаболко, брусница, ореви, фета, дресинг",
    price: 200,
  },
  {
    key: 2,

    name: "Зимска Салата",
    desc: "рукола, цвекло, портокал, фета, црвен кромид, ореви, дресинг",
    price: 240,
  },
  {
    key: 3,

    name: "Пилешка Салата",
    desc: "зелена салата, пилешки стек, индиски ореви, брусница, дресинг",
    price: 230,
  },
  {
    key: 4,

    name: "Туна Салата",
    desc: "туна во маслиново, грашак, морков, пченка, шери, маслинки, дресинг",
    price: 200,
  },
];

function Salads() {
  return (
    <>
      <Products data={data} />
    </>
  );
}

export default Salads;
