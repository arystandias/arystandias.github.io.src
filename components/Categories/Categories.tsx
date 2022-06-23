import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CategoryCard from "../Card/CategoryCard";
import { useRouter } from "next/router";

import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import usePagination from "@mui/material/usePagination";

import { data as categories } from "../../markdown/categories";

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
    }
  }, [endInterval]);

  function getCategories() {
    return categories;
  }

  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <List
        component="div"
        aria-label="main mailbox folders"
        sx={{ p: 0, m: 0, width: "100%" }}
      >
        {Array.from(getCategories())
          .slice(startInterval, endInterval)
          .map((post, index) => (
            <CategoryCard
              key={index}
              title={post.title}
              createdDate={post.created_date}
              url={"/dd"}
              image={post.image}
            />
          ))}
      </List>
      <Divider />
      <Stack
        spacing={2}
        sx={{ display: getCategories().length > pageSize ? "block" : "none" }}
      >
        <Pagination
          count={Math.round(getCategories().length / pageSize)}
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
