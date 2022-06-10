import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { red, grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ListDesktop from "../List/Desktop";
import ListMobile from "../List/Mobile";
import Footer from "../Footer/Footer";

//import ListItem from '../ListItem/ListItemDesktop';

export default function Category() {
  //const [theme, setTheme] = useState('dark');
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  console.log(router.query);

  function getHeaderImage() {
    if (router.query.slug !== undefined && !isMobile) {
      return "/languages/" + router.query.slug + "/desktop.png";
    }
    if (router.query.slug !== undefined && isMobile) {
      return "/languages/" + router.query.slug + "/mobile.png";
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
                {isMobile ? <ListMobile /> : <ListDesktop />}
              </Box>
              <Footer />
            </>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
