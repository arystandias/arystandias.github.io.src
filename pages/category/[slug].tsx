import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { red, grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ListDesktop from "../../components/List/Desktop";
import ListMobile from "../../components/List/Mobile";
import Footer from "../../components/Footer/Footer";

interface CategoryInterface {
  slug: string;
}

export default function Category({ slug }: CategoryInterface) {
  //const [theme, setTheme] = useState('dark');
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  //console.log(router.query);

  //console.log("---===SLUG===---");
  //console.log(slug);

  function getHeaderImage() {
    if (!isMobile) {
      return "/languages/" + router.query.slug + "/desktop.png";
    }
    if (isMobile) {
      return "/languages/" + router.query.slug + "/mobile_post_header.png";
    }
    return undefined;
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
          />
          <Box sx={{ p: 0 }}>
            <>
              <Breadcrumbs />
              <Box sx={{ p: 4, minHeight: "80vh" }}>
                {isMobile ? <>category mobile</> : <>category desktop</>}
              </Box>
              <Footer />
            </>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
