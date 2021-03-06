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
import Notes from "../components/Notes/Notes";

export default function News() {
  ////const [theme, setTheme] = useState('dark');
  //const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  function getHeaderImage() {
    return isMobile
      ? "/languages/common/header-mobile.png"
      : "/languages/common/header-desktop.png";
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
          <Box sx={{ p: 0 }}>
            <>
              <Breadcrumbs />
              <Box sx={{ p: 4, minHeight: "80vh" }}>
                <Notes />
              </Box>
              <Footer />
            </>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
