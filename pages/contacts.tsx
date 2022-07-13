import * as React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";

import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ListDesktop from "../components/List/DesktopCommon";
import ListMobile from "../components/List/MobileCommon";
import Footer from "../components/Footer/Footer";
import TabPanel from "../components/TabPanel/TabPanel";

export default function News() {
  //const [theme, setTheme] = useState('dark');
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  //console.log(router.query);

  function getHeaderImage() {
    if (!isMobile) {
      return "/languages/common/header-desktop.png";
    }

    return "/languages/common/header-mobile.png";
  }

  function getAvatarImage(): string {
    return "https://avatars.githubusercontent.com/u/99656718?s=400&u=b16c14cd4a5265dc96b01da7fb3a83c73650c27c&v=4";
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{ height: "auto" }}
          style={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[900] : grey[300],
          }}
        >
          <img
            src={getHeaderImage()}
            width={"100%"}
            height={150}
            //srcSet={`${item.img}`}
            alt={"header_image"}
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
          <Box sx={{ p: 2 }}>
            <>
              <Breadcrumbs />
              <Box
                sx={{
                  pt: 4,
                  pl: 1,
                  minHeight: "80vh",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={getAvatarImage()}
                  width={"25%"}
                  height={"25%"}
                  //srcSet={`${item.img}`}
                  alt={"avatar_image"}
                  loading="lazy"
                />
                <TabPanel />
              </Box>
              <Footer />
            </>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
