import * as React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
//import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CardInterface from "../../components/Card/CategoryInterface";
import { useRouter } from "next/router";

export default function CategoryCard({ title, image }: CardInterface) {
  //const theme = useTheme();
  //const router = useRouter();

  function getAlt(): string {
    return title;
  }

  return (
    <Card sx={{ display: "flex", width: "100%", height: "200px", mb: "10px" }}>
      <Link href={"/posts/" + title.toLowerCase()}>
        <CardMedia
          component="img"
          sx={{ width: "200px", height: "200px", cursor: "pointer" }}
          image={image}
          alt={getAlt()}
        />
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto", maxHeight: "70%" }}>
          <Typography href={"/posts/" + title.toLowerCase()} component={Link}>
            {title}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
