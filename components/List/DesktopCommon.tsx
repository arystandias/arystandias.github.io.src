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
import PostInterface from "../../interfaces/Post";
//import ListDesktop from "../../components/List/DesktopCommon";
//import ListMobile from "../../components/List/MobileCommon";
import { data as typescript_posts } from "../../markdown/typescript";
import { data as javascript_posts } from "../../markdown/javascript";
import { data as docker_posts } from "../../markdown/docker";
import { data as mysql_posts } from "../../markdown/mysql";
import { data as kubernetes_posts } from "../../markdown/kubernetes";
import { data as flutter_posts } from "../../markdown/flutter";

type a = {
  items: number[];
};

export default function SelectedListItem() {
  const router = useRouter();
  const [startInterval, setStartInterval] = React.useState(0);
  const [endInterval, setEndInterval] = React.useState(5);

  const [pageSize, setPageSize] = React.useState(5);
  const [posts, setPosts] = React.useState<PostInterface[]>([]);

  console.log("router.query:");
  console.log(router);

  //const routePath = "../../markdown/" + router.query.slug + "/index";
  async function load() {
    const dynamicLoad = (
      await import("../../markdown/" + router.query.slug + "/index.ts")
    ).default;
  }

  const { items } = usePagination({
    count: 5,
  });

  // const handleListItemClick = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //   index: number
  // ) => {
  //   setSelectedIndex(index);
  // };

  React.useEffect(() => {
    if (startInterval) {
      console.log("startInterval:" + startInterval);
    }
  }, [startInterval]);

  React.useEffect(() => {
    var ps = javascript_posts
      .concat(typescript_posts)
      .concat(docker_posts)
      .concat(mysql_posts)
      .concat(kubernetes_posts)
      .concat(flutter_posts)
      .sort((a, b) => {
        var first: number = Date.parse(a.created_date);
        var second: number = Date.parse(b.created_date);
        return second - first;
      });

    setPosts(ps);
  }, []);

  React.useEffect(() => {
    if (endInterval) {
      //console.log("endInterval:" + endInterval);
      //console.log("router.query:");
      //console.log(router.query);
    }
  }, [endInterval]);

  React.useEffect(() => {
    //console.log("--->");
    if (router.query.slug) {
      //setCurrent(router.query.slug);
    }
  }, [router.query.slug]);

  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <List
        component="div"
        aria-label="main mailbox folders"
        sx={{ p: 0, m: 0, width: "100%" }}
      >
        {posts.slice(startInterval, endInterval).map((post, index) => (
          <Card
            key={index}
            title={post.title}
            createdDate={post.created_date}
            author={post.author}
            url={post.url}
            description={post.description}
            post={post.post}
            image={post.image}
          />
        ))}
      </List>
      <Divider />
      <Stack spacing={2} sx={{ display: 1 ? "block" : "none" }}>
        <Pagination
          count={Math.ceil(posts.length / pageSize)}
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
