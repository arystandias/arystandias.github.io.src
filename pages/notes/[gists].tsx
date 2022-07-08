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
import { withRouter } from "next/router";
import { Octokit, App } from "octokit";
import { ParsedUrlQuery } from "node:querystring";

// 2cfa41029f90b716fd36a99cc9252183

export default function Category() {
  const router = useRouter();

  const [thumbnail, setThumbnail] = React.useState("");
  const [createdAt, setCreatedAt] = React.useState<string | undefined>("");
  //const [theme, setTheme] = useState('dark');
  const theme = useTheme();
  const [gists, setGists] = useState<string[]>([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [items, setItems] = useState<GistItem[]>([]);
  const [description, setDescription] = useState<string | null | undefined>();

  const [router_query, setRouterQuery] = useState<ParsedUrlQuery>(router.query);

  React.useEffect(() => {
    //console.log("Router:");
    //console.log(router);
    const octokit = new Octokit({
      auth: "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",
    });

    // async function a() {
    //   const {
    //     data: { login },
    //   } = await octokit.rest.users.getAuthenticated();
    //   console.log("Hello, %s", login);
    // }
    // a();

    // owner: "arystandias",
    //   repo: "2cfa41029f90b716fd36a99cc9252183",
    //   path: "main.md",
    async function loadGists() {
      await octokit
        .request("GET /gists/{gist_id}", {
          gist_id: "d4fe4434e48a68779691896c87940413",
        })
        .then((r) => {
          const desc: string | null | undefined = r.data.description;
          const created_at: string | undefined = r.data.created_at;

          setCreatedAt(created_at);
          setDescription(desc);
        });
    }
    //g();
    //console.log("package name: %s", JSON.parse(data).name);\
    setRouterQuery(router.query);
  }, []);

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
                {isMobile ? (
                  <GistsMobile gist_id={"" + router_query} />
                ) : (
                  <GistsDesktop
                    gist_id={router_query.gists}
                    content={"okk"}
                    created_date={createdAt}
                    author={"Shandyrov"}
                    raw_url={""}
                    type={""}
                  />
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
