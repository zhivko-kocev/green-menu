import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface I {
  key: number;
  name: string;
  desc: string;
  price: number;
}

export default function Item({ name, desc, price }: I) {
  return (
    <Card
      style={{
        maxWidth: 250,
        maxHeight: 200,
        backgroundColor: "#38383D",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        paddingTop: 3,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            backgroundColor: "#8B68AD",
            display: "flex",
            alignItems: "start",
            padding: 1,
            borderRadius: 2,
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {desc}
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {price} ден.
        </Typography>
      </CardContent>
    </Card>
  );
}
