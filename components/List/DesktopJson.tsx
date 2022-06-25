//import * as React from "react";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Card from "../Card/Card";
import { useRouter } from "next/router";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import usePagination from "@mui/material/usePagination";

interface JsonInterface {
  data: JsonData;
}
type JsonData = {
  slice: string[];
};

interface GistItem {
  id: string;
  url: string;
  public: boolean;
  created_at: string;
  updated_at: string;
  comments: number;
  comments_url: string;
  description: string;
  user: string | null;
  owner: Owner;
  files: object[];
}

interface Owner {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  url: string;
  type: string;
  gists_url: string;
}

interface Files {}

export default function SelectedListItem({ data }: JsonInterface) {
  const router = useRouter();
  const [startInterval, setStartInterval] = React.useState(0);
  const [endInterval, setEndInterval] = React.useState(5);

  const [pageSize, setPageSize] = React.useState(5);
  const [gists, setGists] = React.useState<GistItem[]>([]);

  async function load() {
    const dynamicLoad = await fetch("https://api.github.com/users/arystandias");
    //await import("../../markdown/" + router.query.slug + "/index.ts")
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
      //console.log("startInterval:" + startInterval);
    }
  }, [startInterval]);

  React.useEffect(() => {
    fetch("https://api.github.com/users/arystandias/gists")
      .then((r) => r.json())
      .then((files) => {
        console.log("---files---");
        console.log(files);
        // files.map(({ data }: JsonInterface) => {
        //   console.log("File:");
        //   console.log(data);
        // });
        setGists(files);
      });
  }, []);

  React.useEffect(() => {
    if (endInterval) {
      console.log("router.query:");
      console.log(router.query);
    }
  }, [endInterval]);

  React.useEffect(() => {
    console.log("--->");
    if (router.query.slug) {
      //setCurrent(router.query.slug);
    }
  }, [router.query.slug]);

  React.useEffect(() => {
    //posts.slice(startInterval, endInterval).map((post, index) => index);
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <List
        component="div"
        aria-label="main mailbox folders"
        sx={{ p: 0, m: 0, width: "100%" }}
      >
        {gists.slice(startInterval, endInterval).map((gist, index) => (
          <div key={index}>
            <div>{gist.id}</div>
            <div>{gist.description}</div>
            <div>{gist.url}</div>
          </div>
          // <Card
          //   key={index}
          //   title={post.title}
          //   createdDate={post.created_date}
          //   author={post.author}
          //   url={post.url}
          //   description={post.description}
          //   post={post.post}
          //   image={post.image}
          // />
        ))}
      </List>
      <Divider />
      <Stack spacing={2} sx={{ display: 1 ? "block" : "none" }}>
        <Pagination
          count={Math.round(gists.length / pageSize)}
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
// {
//   /* {Array.from()
//   //.slice(startInterval, endInterval)
//   .map(
//     (
//       post,
//       index //"" + console.log(posts.posts)
//     ) => (
//       // <ListItemButton children={<div>{post.description}</div>} />
//       <Card
//         key={index}
//         title={post.posts[0].title}
//         createdDate={post.posts[0].created_date}
//         author={post.posts[0].author}
//         url={post.posts[0].url}
//         description={post.posts[0].description}
//         post={post.posts[0].post}
//       />
//     )
//   )} */
// }
