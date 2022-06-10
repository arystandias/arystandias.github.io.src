import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Card from "../Card/Card";
import { data } from "../../markdown/javascript";

function author(): JSX.Element {
  return <strong>Shandyrov Askar</strong>;
}
function createdDate(): JSX.Element {
  return <strong>05.05.2022</strong>;
}

function t() {
  const m = Array.from(data).map((post, index) => <>{index}</>);
  console.log("MK");
  console.log(m);
  return m;
}

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <List
        component="div"
        aria-label="main mailbox folders"
        sx={{ p: 0, m: 0, width: "100%" }}
      >
        {Array.from(data).map((post, index) => (
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
      <Divider />
    </Box>
  );
}

// <Card
//   key={index}
//   title=""
//   createdDate={<>01.12.2022</>}
//   author={<>Shandyrov Askar</>}
// />
