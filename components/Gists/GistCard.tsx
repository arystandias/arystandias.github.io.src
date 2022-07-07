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
import GistsInterface from "../Gists/interfaces/GistsInterface";
import Link from "next/link";

interface Data {
  content: string;
  match: string;
}
interface Match {
  match: any;
}

function v({ content, match }: Data) {
  content
    .replace("#", "")
    .replace("##", "")
    .replace("###", "")
    .replace("####", "")
    .replace("#####", "")
    .slice(1, match && match["index"] ? match["index"] : 1);
}

export default function MediaControlCard({
  content,
  author,
  created_date,
  raw_url,
}: GistsInterface) {
  const theme = useTheme();
  const match: RegExpExecArray | "" | null = content
    ? /\r|\n/.exec(content)
    : null;
  return (
    <Link href={"/"}>
      <a>
        <Card sx={{ display: "flex", m: 1 }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            //image="/static/images/cards/live-from-space.jpg"
            image="https://mui.com/static/images/cards/live-from-space.jpg"
            alt="Alt need"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="h1" variant="h6">
                {content
                  ? content
                      .replace("#", "")
                      .replace("##", "")
                      .replace("###", "")
                      .replace("####", "")
                      .replace("#####", "")
                      .slice(1, match && match["index"] ? match["index"] : 1)
                  : ""}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <Typography component="h1" variant="h6">
                  {content && match
                    ? content
                        .slice(match["index"])
                        .replace(/([#]+)/gi, "")
                        .replace(/(<([^>]+)>)/gi, "")
                        .replace(/[```]+/gi, "")
                        .slice(0, 200) + "..."
                    : ""}
                </Typography>
                {author} {created_date}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </a>
    </Link>
  );
}
