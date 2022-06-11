import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Card from "../Card/Card";
import { data as typescript_posts } from "../../markdown/typescript";
import { data as javascript_posts } from "../../markdown/javascript";
import { useRouter } from "next/router";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import usePagination from "@mui/material/usePagination";

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const router = useRouter();
  const [startInterval, setStartInterval] = React.useState(0);
  const [endInterval, setEndInterval] = React.useState(5);

  const routePath = "../../markdown/" + router.query.slug + "/index";
  //const dynamicLoad = (await import("../../markdown/"+router.query.slug+"/index")).default;

  const { items } = usePagination({
    count: 5,
  });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  function getPosts() {
    switch (router.query.slug) {
      case "typescript":
        return typescript_posts;
      case "javascript":
        return javascript_posts;
      default:
        typescript_posts;
    }
    return typescript_posts;
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
            />
          ))}
      </List>
      <Stack spacing={2}>
        <Pagination
          count={Math.round(javascript_posts.length / 5)}
          size="large"
          onChange={(event: React.ChangeEvent<unknown>, page: number) => {
            setStartInterval((page - 1) * 5);
            setEndInterval(page * 5);
          }}
        />
      </Stack>
      <Divider />
    </Box>
  );
}
