import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppProps from "../../interfaces/AppProps";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { purple, red, grey, green } from "@mui/material/colors";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArticleIcon from "@mui/icons-material/Article";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AppsIcon from "@mui/icons-material/Apps";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/router";

interface SelectedIndex {
  index: number;
}

const drawerWidth = 240;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[900],
    },
  },
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ children }: AppProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("recents");
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function setSelectedIndex({ index }: SelectedIndex) {
    try {
      var i = "" + index;
      localStorage.removeItem("selected-index");
      localStorage.setItem("selected-index", i);
      return true;
    } catch (e) {
      return false;
    }
  }
  const handleListItemClick = ({ index }: SelectedIndex) => {
    setSelectedIndex({ index });
    switch (index) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/news");
        break;
      case 2:
        router.push("/category");
        break;
      case 3:
        router.push("/posts");
        break;
      case 4:
        router.push("/notes");
        break;
      case 5:
        router.push("/contacts");
        break;
      default:
        router.push("/");
    }
  };

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue("");
  // };

  function getSelectedIndex() {
    console.log("Route:");
    console.log(router.route);
    switch (router.route) {
      case "/":
        return 0;
      case "/news":
        return 1;
      case "/category":
        return 2;
      case "/posts":
        return 3;
      case "/notes":
        return 4;
      case "/contacts":
        return 5;
      default:
        return 0;
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              ?????????????? ?? ????????????
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {[
              { title: "??????????????", icon: <HomeIcon />, path: "/" },
              { title: "??????????????", icon: <NewspaperIcon />, path: "/news" },
              { title: "??????????????????", icon: <AppsIcon />, path: "/category" },
              { title: "????????????", icon: <ArticleIcon />, path: "/posts" },
              { title: "??????????????", icon: <EventNoteIcon />, path: "/notes" },

              {
                title: "????????????????",
                icon: <AlternateEmailIcon />,
                path: "/contacts",
              },
            ].map((item, index) => (
              <Tooltip
                key={index}
                title={item.title}
                placement="right-end"
                color={"red"}
              >
                <ListItem
                  key={index}
                  disablePadding
                  sx={{ display: "block" }}
                  selected={index === getSelectedIndex()}
                  onClick={() => {
                    handleListItemClick({ index });
                    console.log("index1: ");
                    console.log(index);
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Drawer>
        <Main open={open} sx={{ p: 1 }}>
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </ThemeProvider>
  );
}
