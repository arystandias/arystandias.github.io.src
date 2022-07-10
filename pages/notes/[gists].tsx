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
import GistsInterface from "../../components/Gists/interfaces/GistsInterface";

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
  const [router_query_gists, setRouterQueryGists] = useState<ParsedUrlQuery[]>(
    []
  );

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
    async function load() {
      const octokit = new Octokit({
        auth: `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`,
      });

      const {
        data: { login },
      } = await octokit.rest.users.getAuthenticated();
      console.log("Hello, %s", login);
    }

    //console.log("package name: %s", JSON.parse(data).name);\

    //console.log("Category()");
    //load();
  }, []);

  React.useEffect(() => {
    async function loadGists() {
      const octokit = new Octokit({
        auth: `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`,
      });
      await octokit
        .request("GET /gists/{gist_id}", {
          gist_id: "2cfa41029f90b716fd36a99cc9252183",
          //gist_id: router_query_gists.join(""),
        })
        .then((r) => {
          const desc: string | null | undefined = r.data.description;
          const created_at: string | undefined = r.data.created_at;

          setCreatedAt(created_at);
          setDescription(desc);
          //console.log("r.data.files:");
          //console.log(r.data.files);

          const keys = r.data.files ? Object.keys(r.data.files) : undefined;
          const values = r.data.files ? Object.values(r.data.files) : undefined;

          //console.log("Keys:");
          //console.log(keys);
          //console.log("Values:");
          //console.log(values);

          const objects = JSON.parse(JSON.stringify(r.data.files));
          const t = Object.keys(objects).map((object, index) => object[index]);
          //console.log("t:");
          //console.log(t);
        })
        .catch((o) => {
          console.error(o);
        });
    }

    if (router_query_gists) {
      console.log("router_query_gists:");
      console.log(router_query_gists);
      loadGists();
    }
  }, [router_query_gists]);

  function getHeaderImage() {
    return isMobile
      ? "/languages/common/header-mobile.png"
      : "/languages/common/header-desktop.png";
  }
  //console.log(router_query.gists as string);
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
