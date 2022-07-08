import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
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
import javascript_thumbnail from "../../public/default/javascript/thumbnail.png";

interface Note {
  children: GistItem;
}

// const Note = ({ children }: Note): JSX.Element => {
//   return <>{children.id}</>;
// };

// export default Note;

export default function MediaControlCard({ children }: Note) {
  const router = useRouter();

  const theme = useTheme();
  const [image, setImage] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");
  const [type, setType] = React.useState("");
  // single post or multiple
  const [single, setSingle] = React.useState(false);

  const jsonObjects: string[] = JSON.parse(JSON.stringify(children.files));
  //console.log("jsonObjects:");
  //console.log(jsonObjects);

  React.useEffect(() => {
    const isImageExist = Object.keys(jsonObjects).map((e, index) => {
      const extension = e.split(".").pop();

      const imageExist = extension === "jpg" || extension === "png";
      if (imageExist) {
      }
    });

    if (Object.keys(jsonObjects).length === 2) {
      Object.keys(jsonObjects).map((i, index) => {
        console.log("I:");
        console.log(i);
      });
    }

    Object.keys(jsonObjects).map((item, index) => {
      const extension = item.split(".").pop();
      const k = Object.keys(item);
      if (k && k.length === 1 && extension === "md") {
        //console.log("---===MD===---");
        const obj = JSON.parse(JSON.stringify(children.files));
      }
    });
    // Устанавливаем тип (например javascript)
    // Устанавливаем миниатюру
    const is_javascript = children.description.indexOf("JavaScript");
    const is_JSON = children.description.indexOf("JSON");
    if (is_javascript > 0) {
      setType("javascript");
      setThumbnail("/default/javascript/thumbnail.png");
    }
    if (is_JSON > 0) {
      setType("json");
      setThumbnail("/default/json/thumbnail.png");
    }
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
            <Link
              style={{ textDecoration: "underline" }}
              href={
                "https://gist.githubusercontent.com/arystandias/" + children.id
              }
            >
              <a>Источник: https://gist.github.com</a>
            </Link>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
