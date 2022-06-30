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
import Avatar from "@mui/material/Avatar";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { GistItem } from "../GistCard/interfaces/GistItem";
import Link from "next/link";
import { json } from "node:stream/consumers";
import defaultImage from "../../public/default/gist/light.png";

interface Note {
  children: GistItem;
}

// const Note = ({ children }: Note): JSX.Element => {
//   return <>{children.id}</>;
// };

// export default Note;

export default function MediaControlCard({ children }: Note) {
  const theme = useTheme();
  const [image, setImage] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");

  const jsonObjects: string[] = JSON.parse(JSON.stringify(children.files));

  const isArray = Array.isArray(jsonObjects);
  const firstElementExtension = Object.keys(jsonObjects)[0].split(".").pop();

  React.useEffect(() => {
    Object.keys(jsonObjects).map((item, index) => {
      //console.log(index);
      const extension = item.split(".").pop();
      const k = Object.keys(item);
      if ((k && extension === "png") || (k && extension === "jpg")) {
        const p = JSON.parse(JSON.stringify(children.files));
        const image_id = p["thumbnail.png"]
          ? p["thumbnail.png"]["raw_url"].split("/")
          : null;
        if (image_id) {
          const t = image_id[6];
          //console.log("raw_url:");
          //console.log(image_id[6]);
          setThumbnail(
            "https://gist.githubusercontent.com/arystandias/" +
              children.id +
              "/raw/" +
              image_id[6]
          );
        }
      }
    });
  }, []);
  return (
    <Card sx={{ display: "flex", mb: 1, cursor: "pointer" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        // https://gist.githubusercontent.com/arystandias/d4fe4434e48a68779691896c87940413/raw/dbe6af9c582761e344aa8286cb4c3227afd434ae/1.png
        image={thumbnail ? thumbnail : defaultImage.src}
        alt="Nedd set alt"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Link href={"/notes/" + children.id}>
            <Typography component="div" variant="h6">
              {children.description}
            </Typography>
          </Link>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <small>
              <strong
                style={{ paddingRight: 5 }}
                itemScope
                itemType="http://schema.org/Person"
              >
                {children.owner.login}
              </strong>

              <time dateTime={children.created_at}>
                {children.created_at.slice(0, 10)}
              </time>
            </small>
            <br />
            <a
              style={{ textDecoration: "underline" }}
              href={
                "https://gist.githubusercontent.com/arystandias/" + children.id
              }
            >
              Источник: https://gist.github.com
            </a>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
