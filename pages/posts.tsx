import * as React from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";

import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import PostsDesktop from "../components/Posts/Desktop";
import PostsMobile from "../components/Posts/Mobile";
import Footer from "../components/Footer/Footer";

export default function Category() {
  //const [theme, setTheme] = useState('dark');
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  //console.log(router.query);

  function getHeaderImage() {
    return "/languages/common/header-desktop.png";
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
                {isMobile ? <PostsMobile /> : <PostsDesktop />}
              </Box>
              <Footer />
            </>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
