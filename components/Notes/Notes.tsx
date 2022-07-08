import * as React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useState } from "react";
import GistCard from "../GistCard/GistCard";
import { GistItem } from "../GistCard/interfaces/GistItem";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Note from "../Notes/Note";

export default function Notes() {
  //const [theme, setTheme] = useState('dark');
  const [gistItems, setGistItems] = useState<GistItem[]>([]);
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [startInterval, setStartInterval] = React.useState(0);
  const [endInterval, setEndInterval] = React.useState(5);
  const [pageSize, setPageSize] = React.useState(5);

  // const p = async () => {
  //   //fetch("https://api.github.com/users/defunkt").then((resp) => {
  //     const  response = await resp.json;
  //     setPosts(json);
  //   //});
  // };

  // React.useEffect(() => {
  //   const a = async () => {
  //     fetch("https://api.github.com/users/arystandias").then((response) => {console.log(posts)});
  // }, []);

  React.useEffect(() => {
    //fetch("https://api.github.com/users/arystandias")
    //fetch("https://api.github.com/gists/public")
    fetch("https://api.github.com/users/arystandias/gists")
      .then((response) => response.json())
      .then((data) => JSON.stringify(data))
      .then((objects) => {
        //console.log("Objects:");
        //console.log(objects);
        setGistItems(JSON.parse(objects));
      });
  }, []);

  return (
    <React.Fragment>
      <>
        {gistItems.map((gist, index) => (
          <Note key={index}>{gist}</Note>
        ))}
        <Stack
          spacing={2}
          sx={{ display: gistItems.length > pageSize ? "block" : "none" }}
        >
          <Pagination
            count={Math.round(gistItems.length / pageSize)}
            size="large"
            onChange={(event: React.ChangeEvent<unknown>, page: number) => {
              setStartInterval((page - 1) * pageSize);
              setEndInterval(page * pageSize);
            }}
          />
        </Stack>
      </>
    </React.Fragment>
  );
}
