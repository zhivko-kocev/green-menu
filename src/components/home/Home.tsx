import "./Home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Home() {
  return (
    <>
      <Stack spacing={2} direction={"column"} className="main">
        <div>
          <img src="/src/assets/logo.jpg" alt="logo" width={100} height={100} />
        </div>
        <Link to="/smoothies" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8B68AD",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#8B6090" },
              borderRadius: "8px",
            }}
          >
            Смути
          </Button>
        </Link>
        <Link to="/sandwiches" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8B68AD",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#8B6090" },
              borderRadius: "8px",
            }}
          >
            Сендвичи
          </Button>
        </Link>
        <Link to="/healthy-plates" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8B68AD",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#8B6090" },
              borderRadius: "8px",
            }}
          >
            Здрави чинии
          </Button>
        </Link>
        <Link to="/salads" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8B68AD",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#8B6090" },
              borderRadius: "8px",
            }}
          >
            Салати
          </Button>
        </Link>
        <Link to="/sweets" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8B68AD",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#8B6090" },
              borderRadius: "8px",
            }}
          >
            Слатки
          </Button>
        </Link>
        <Stack direction="row" spacing={2} className="socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon sx={{ color: "white" }} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: "white" }} />
          </a>
        </Stack>
      </Stack>
    </>
  );
}

export default Home;
