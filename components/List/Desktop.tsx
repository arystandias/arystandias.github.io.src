import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Card from "../Card/Card";
import { useRouter } from "next/router";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import usePagination from "@mui/material/usePagination";
import AppProps from "../../interfaces/AppProps";

import { data as typescript_posts } from "../../markdown/typescript";
import { data as javascript_posts } from "../../markdown/javascript";
import { data as react_posts } from "../../markdown/react";
import { data as docker_posts } from "../../markdown/docker";
import { data as mysql_posts } from "../../markdown/mysql";
import { data as php_posts } from "../../markdown/php";
import { data as kubernetes_posts } from "../../markdown/kubernetes";
import { data as yii_posts } from "../../markdown/yii";
import { data as redis_posts } from "../../markdown/redis";
import { data as node_js_posts } from "../../markdown/node_js";

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const router = useRouter();
  const [startInterval, setStartInterval] = React.useState(0);
  const [endInterval, setEndInterval] = React.useState(5);

  const [pageSize, setPageSize] = React.useState(5);

  //const routePath = "../../markdown/" + router.query.slug + "/index";
  async function load() {
    const dynamicLoad = (
      await import("../../markdown/" + router.query.slug + "/index.ts")
    ).default;
  }

  const { items } = usePagination({
    count: 5,
  });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  React.useEffect(() => {
    if (startInterval) {
      console.log("startInterval:" + startInterval);
    }
  }, [startInterval]);

  React.useEffect(() => {
    if (endInterval) {
      //console.log("endInterval:" + endInterval);
      //console.log("router.query:");
    }
  }, [endInterval]);

  React.useEffect(() => {
    //console.log("--->");
    if (router.query.slug) {
      //setCurrent(router.query.slug);
    }
  }, [router.query.slug]);

  function getPosts() {
    switch (router.query.slug) {
      case "typescript":
        return typescript_posts;
      case "javascript":
        return javascript_posts;
      case "docker":
        return docker_posts;
      case "mysql":
        return mysql_posts;
      case "php":
        return php_posts;
      case "kubernetes":
        return kubernetes_posts;
      case "yii":
        return yii_posts;
      case "react":
        return react_posts;
      case "node_js":
        return node_js_posts;
    }
    return javascript_posts;
  }

  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <List
        component="div"
        aria-label="main mailbox folders"
        sx={{ p: 0, m: 0, width: "100%" }}
      >
        {Array.from(getPosts())
          .slice(startInterval, endInterval)
          .map((post, index) => (
            // <ListItemButton children={<div>{post.description}</div>} />
            <Card
              key={index}
              title={post.title}
              createdDate={post.created_date}
              author={post.author}
              url={post.url}
              description={post.description}
              post={post.post}
              image={"/"}
            />
          ))}
      </List>
      <Divider />
      <Stack
        spacing={2}
        sx={{ display: getPosts().length > pageSize ? "block" : "none" }}
      >
        <Pagination
          count={Math.ceil(getPosts().length / pageSize)}
          size="large"
          onChange={(event: React.ChangeEvent<unknown>, page: number) => {
            setStartInterval((page - 1) * pageSize);
            setEndInterval(page * pageSize);
          }}
        />
      </Stack>
    </Box>
  );
}
