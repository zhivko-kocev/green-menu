import "./Home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";

function Home() {
  return (
    <>
      <Stack spacing={2} direction={"column"} className="main">
        <div>
          <img src="/logo.png" alt="logo" width={120} height={120} />
        </div>
        <Link to="/smoothies" style={{ textDecoration: "none" }}>
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
            Смути
          </Button>
        </Link>
        <Link to="/sandwiches" style={{ textDecoration: "none" }}>
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
            Сендвичи
          </Button>
        </Link>
        <Link to="/healthy-plates" style={{ textDecoration: "none" }}>
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
            Здрави чинии
          </Button>
        </Link>
        <Link to="/salads" style={{ textDecoration: "none" }}>
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
            Салати
          </Button>
        </Link>
        <Link to="/sweets" style={{ textDecoration: "none" }}>
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
            Слатки
          </Button>
        </Link>
        <Stack direction="row" spacing={2} className="socials">
          <a
            href="https://www.instagram.com/take.eat.easy.skopje/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>Follow us on -{">"} </div>{" "}
            <InstagramIcon sx={{ color: "white" }} />
          </a>
        </Stack>
      </Stack>
    </>
  );
}

export default Home;
