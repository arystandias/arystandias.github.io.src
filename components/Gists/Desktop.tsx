import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GistsInterface from "./interfaces/GistsInterface";
import { Octokit, App } from "octokit";
import GistCard from "../Gists/GistCard";

// Нужно проверить!!!
interface Gist {
  status: number;
  url: string;

  // create interface
  headers: {
    "cache-control": string;
    "content-type": string;
    etag: string;
    "last-modified": string;
  };

  // create interface
  data: {
    id: string; // ok
    comments: 0; // ok
    comments_url: string; // ok
    created_at: string; // ok
    updated_at: string; // ok
    description: string; // ok
    files: {}; // ok
    html_url: string; // html_url
    url: string; // ok

    // create interface
    owner: {
      id: string; // ok
      login: string; // ok
      avatar_url: string;
      gists_url: string;
      html_url: string;
      organizations_url: string; // ok
      repos_url: string; // ok
      url: string; // ok
      type: string; // ok
    };
  };
}
interface LinkInterface {
  index: number;
  item: any;
}
interface GistItemInterface {
  raw_url: string;
  url: string;
  description: string;
  content: string;
}
function Gists({ gist_id, content }: GistsInterface): JSX.Element {
  const router = useRouter();
  const [items, setItems] = useState<GistsInterface[]>([]);

  const [title, setTitle] = React.useState<string | null | undefined>("");
  const [files, setFiles] = React.useState<GistsInterface[]>([]);
  const [ready, setReady] = useState<boolean>(false);
  //const gist_url = "https://api.github.com/gists/" + gist_id;
  const [router_query, setRouterQuery] = useState<
    string | string[] | undefined
  >(router.query.gists);

  const [octokit, setOctokit] = React.useState<Octokit>();
  const [created_at, setCreatedAt] = React.useState<string | undefined>();
  const [description, setDescription] = React.useState<
    string | null | undefined
  >();

  async function g() {
    const octokit = new Octokit({
      auth: "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",
    });
    if (octokit) {
      await octokit
        .request("GET /gists/{gist_id}", {
          gist_id: router.query.gists as string, // "d4fe4434e48a68779691896c87940413",
        })
        .then((r) => {
          const values = Object.values(r.data.files as object);
          //console.log("Values:");
          //console.log(values);
          setItems(values);
        });
    }
  }

  useEffect(() => {}, []);

  useEffect(() => {
    if (router.isReady) {
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.query && router.query.gists) {
      const octokit = new Octokit({
        auth: "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",
      });

      setRouterQuery(router.query.gists);
      //console.log(router.query.gists);
      //g();
    }
  }, [router.query]);

  return (
    <>
      {items
        // filter: Убираем изображения
        .filter((e) => e.type != "image/png")
        .map(
          (item, index): JSX.Element => (
            <GistCard
              key={index}
              content={item.content}
              author={item.author}
              created_date={item.created_date}
              raw_url={item.raw_url}
              type={item.type}
            />
          )
        )}
    </>
  );
}
export default Gists;
