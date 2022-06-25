import * as React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useState } from "react";
import DesktopJson from "../List/DesktopJson";

export default function News() {
  //const [theme, setTheme] = useState('dark');
  const [posts, setPosts] = useState([]);
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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
        setPosts(JSON.parse(objects));
      });
  }, []);

  return (
    <React.Fragment>
      {posts.map((obj, index) => (
        <DesktopJson key={index} data={obj} />
      ))}
    </React.Fragment>
  );
}
