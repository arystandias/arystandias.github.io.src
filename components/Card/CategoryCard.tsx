import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@mui/material/Button";
import NextLink from "../Link/Link";
import CardInterface from "../../components/Card/CategoryInterface";

export default function CategoryCard({
  title,
  createdDate,
  url,
  image,
}: CardInterface) {
  const theme = useTheme();
  const router = useRouter();

  function getSlug(): string | null {
    console.log("router.query:");
    console.log(router.query);

    if (router.query.slug) {
      return router.query.slug as string;
    } else {
      return null;
    }
  }

  function getAlt(): string {
    return (router.query.slug as string) || title;
  }

  function getPostName(): string {
    return router.query.postname as string;
  }

  return (
    <Card sx={{ display: "flex", width: "100%", height: "200px", mb: "10px" }}>
      <Link href={getSlug() ? "/posts/" + getSlug() + "/" + url : url}>
        <CardMedia
          component="img"
          sx={{ width: "200px", height: "200px", cursor: "pointer" }}
          image={getSlug() ? "/posts/" + getSlug() + "/logo.png" : image}
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
