import * as React from "react";
import { useState } from "react";
import { Container, Box, CssBaseline } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { GistItem } from "../../components/GistCard/interfaces/GistItem";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import GistsDesktop from "../../components/Gists/Desktop";
import GistsMobile from "../../components/Gists/Mobile";
import Footer from "../../components/Footer/Footer";

import thumbnail_bash from "../public/default/bash/thumbnail.png";
import thumbnail_javascript from "../public/default/javascript/thumbnail.png";
import thumbnail_json from "../../public/default/json/thumbnail.png";

export default function Category() {
  const [thumbnail, setThumbnail] = React.useState("");
  //const [theme, setTheme] = useState('dark');
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [items, setItems] = useState<GistItem[]>([]);

  //console.log(router.query);

  // function getHeaderImage() {
  //   return "/languages/common/header.png";
  // }

  function getHeaderImage() {
    console.log("router.query:");
    console.log(router.query);

    return isMobile
      ? "/languages/common/header-mobile.png"
      : "/languages/common/header-desktop.png";
  }
  //console.log("Items:");
  //console.log(items);

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
                {isMobile ? (
                  <GistsMobile />
                ) : (
                  <GistsDesktop gist_id={"super"} />
                )}
              </Box>
              <Footer />
            </>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
