import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import usePagination from "@mui/material/usePagination";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { GistItem } from "./interfaces/GistItem";
import GistCards from "../Card/GistCard";

interface GistData {
  data: GistItem;
}

export default function GistCard({ data }: GistData): JSX.Element {
  const router = useRouter();

  const [pageSize, setPageSize] = React.useState(5);
  const [gists, setGists] = React.useState<GistItem[]>([]);

  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <GistCards url={data.url} description={data.description} />
    </Box>
  );
}
