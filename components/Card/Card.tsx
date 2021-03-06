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
import CardInterface from "../../components/Card/CardInterface";
import Rating from "@mui/material/Rating";

// interface CardInterface {
//   author: string;
//   createdDate: string;
//   title: string;
//   url: string;
//   description: string;
//   post: string;
// }

export default function MediaControlCard({
  author,
  createdDate,
  title,
  url,
  description,
  post,
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
          <Typography
            href={"/posts/" + getSlug() + "/" + url}
            component={Link}
            variant="h3"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {createdDate} {author}
          </Typography>
          <Typography href={"/posts/" + getSlug() + "/" + url} component={Link}>
            {description.slice(0, 200) + ".."}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            pl: 1,
            pb: 1,
            height: "30%",
          }}
        >
          {/* <Link href={"/posts/" + getSlug() + "/" + url}>
            <IconButton
              size="small"
              style={{
                backgroundColor: "text.primary",
                color: "secondary",
                border: "1px solid gray",
                borderRadius: 0,
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              ??????????????????
            </IconButton>
          </Link> */}
        </Box>
      </Box>
    </Card>
  );
}
