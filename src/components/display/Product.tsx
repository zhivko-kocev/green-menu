import Button from "@mui/material/Button";
import Item from "./Item";
import "./Product.css";
import { Link } from "react-router-dom";

interface P {
  data: { key: number; name: string; desc: string; price: number }[];
}

function Product({ data }: P) {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6A1E55",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#8B6090" },
            borderRadius: "8px",
            border: "1px solid #A64D79",
          }}
        >
          Назад
        </Button>
      </Link>
      <div>
        {data.map((item) => (
          <Item
            key={item.key} // It's important to add a unique key for each item in the list
            name={item.name}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default Product;
