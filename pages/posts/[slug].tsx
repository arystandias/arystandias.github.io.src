import { useRouter } from "next/router";

import JavascriptIntroduction from "../../posts/javascript/introduction.md";
import TypescriptIntroduction from "../../posts/typescript/introduction.md";

import Array from "../../posts/javascript/Array.md";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef, useState } from "react";
import { ParsedUrlQuery } from "querystring";
import Category from "../../components/Category/Category";

export default function Slug() {
  const router = useRouter();
  const [markdown, setMarkdown] = useState("");

  //const [query, setQuery] = useState<ParsedUrlQuery>(router.query);

  //const ref = useRef();

  //var items: String[] = [];

  // useEffect(() => {
  //   if (router.isReady) {
  //     console.log('isReady');
  //     console.log(router.query);

  //     if (router.query && router.query.slug === 'javascript') {
  //       setMarkdown(JavascriptIntroduction);
  //     }
  //     if (router.query && router.query.slug === 'typescript') {
  //       setMarkdown(TypescriptIntroduction);
  //     }

  //     console.log('slug: '+router.query.slug);
  //   }
  // }, [router.isReady]);                                                                                                                                           ]);

  //return <ReactMarkdown>{markdown}</ReactMarkdown>
  console.log("OK1");
  return <Category />;
}
