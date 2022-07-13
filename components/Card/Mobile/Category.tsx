import * as React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CardInterface from "../CategoryInterface";
//import { useRouter } from "next/router";
//import { useTheme } from "@mui/material/styles";

export default function CategoryCard({ title, image }: CardInterface) {
  //const theme = useTheme();
  //const router = useRouter();

  function getAlt(): string {
    return title;
  }

  return (
    <Card sx={{ display: "flex", width: "auto", height: "auto", mb: "10px" }}>
      <Link href={"/posts/" + title.toLowerCase()} title={title}>
        <CardMedia
          component="img"
          sx={{ width: "auto", height: "auto", cursor: "pointer" }}
          image={image}
          alt={getAlt()}
        />
      </Link>
    </Card>
  );
}
