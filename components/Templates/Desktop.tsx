import * as React from "react";
import AppProps from "../../interfaces/AppProps";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple, red, grey, green } from "@mui/material/colors";
import { useRouter } from "next/router";
import Tooltip from "@mui/material/Tooltip";

import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArticleIcon from "@mui/icons-material/Article";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import AppsIcon from "@mui/icons-material/Apps";
import EventNoteIcon from "@mui/icons-material/EventNote";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import FolderIcon from "@mui/icons-material/Folder";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

interface ListItemClickInterface {
  index: number;
}

const drawerWidth = 200;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[900],
    },
  },
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }: AppProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    var i: SelectedIndex = { index: getSelectedIndex() };
    setSelectedIndex(i);
  }, []);
  /**
   * Обработчик нажатия на пункт меню
   * @param param0
   */
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

  interface SelectedIndex {
    index: number;
  }

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

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
              {open ? (
                theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )
              ) : (
                <MenuIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              { title: "Главная", icon: <HomeIcon />, path: "/" },
              { title: "Новости", icon: <NewspaperIcon />, path: "/news" },
              { title: "Категории", icon: <AppsIcon />, path: "/category" },
              { title: "Статьи", icon: <ArticleIcon />, path: "/posts" },
              { title: "Заметки", icon: <EventNoteIcon />, path: "/notes" },

              {
                title: "Контакты",
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
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          {/* <DrawerHeader /> */}
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
