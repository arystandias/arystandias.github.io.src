import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import javascript from "../../public/posts/javascript/logo.png";
import typescipt from "../../public/posts/typescipt/logo.png";
import docker from "../../public/posts/docker/logo.png";
import bash from "../../public/posts/bash/logo.png";
import react from "../../public/posts/react/logo.png";
import mysql from "../../public/posts/mysql/logo.png";

interface Size {
  width: number;
  height: number;
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function StandardImageList() {
  const size: Size = useWindowSize();
  const isDesktop = useMediaQuery("(min-width:600px)", { noSsr: true });
  const [hover, setHover] = useState(-1);

  //console.log("size:");
  //console.log(size);

  useEffect(() => {
    if (size.height > 0) {
      console.log("height: " + size.height);
      console.log("width: " + size.width);
    }
  }, [size]);

  useEffect(() => {
    if (isDesktop) {
      console.log("isDesktop");
    } else {
      console.log("IS Mobile");
    }
  }, [isDesktop]);

  return (
    <ImageList sx={{ padding: 0, margin: 0 }} cols={5}>
      {isDesktop
        ? itemDataDesktop.map((item, index) => (
            <Link href={item.route} key={index}>
              <ImageListItem
                style={{
                  cursor: "pointer",
                  opacity: index === hover ? 1.0 : 0.9,
                }}
                onMouseOver={(e) => {
                  setHover(index);
                }}
              >
                {/* <Image
                  src={`${item.img}`}
                  alt={item.title}
                  height={size.height ? 305 : 0}
                  width={size.width ? 358 : 0}
                  //layout="responsive"
                
                  loading="lazy"
                /> */}
                <img
                  data-w={size.width}
                  data-h={size.height}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    height: size.height ? size.height / 3 - 24 : 0,
                    width: size.width ? size.width / 5 - 24 : 0,
                  }}
                />
              </ImageListItem>
            </Link>
          ))
        : itemDataMobile.map((item, index) => (
            <Link href={item.route} key={index}>
              <ImageListItem
                cols={2}
                rows={4}
                sx={{
                  cursor: "pointer",
                  width: size.width / 2,
                  height: size.height / 3,
                }}
              >
                <img
                  data-w={size.width}
                  data-h={size.height}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </Link>
          ))}
    </ImageList>
  );
}

const itemDataDesktop = [
  {
    title: "JavaScript",
    route: "/posts/javascript",
    img: "/posts/javascript/logo.png",
  },
  {
    title: "TypeScript",
    route: "/posts/typescript",
    img: "posts/typescript/logo.png",
  },
  {
    title: "Docker",
    route: "/posts/docker",
    img: "/posts/docker/logo.png",
  },
  {
    title: "Bash",
    route: "/posts/bash/",
    img: "/posts/bash/logo.png",
  },
  {
    title: "MySQL",
    route: "/posts/mysql",
    img: "/posts/mysql/logo.png",
  },
  {
    title: "React",
    route: "/posts/react",
    img: "/posts/react/logo.png",
  },
  {
    title: "php",
    route: "/posts/php",
    img: "/posts/php/logo.png",
  },
  {
    title: "kubernetes",
    route: "/posts/kubernetes",
    img: "/posts/kubernetes/logo.png",
  },
  {
    img: "/posts/c_sharp/logo.png",
    title: "c#",
    route: "/posts/c_sharp",
  },
  {
    title: "node_js",
    route: "/posts/node_js",
    img: "/posts/node_js/logo.png",
  },
  {
    title: "yii",
    route: "/posts/yii",
    img: "/posts/yii/logo.png",
  },
  {
    img: "/posts/golang/logo.png",
    title: "golang",
    route: "/posts/golang/logo.png",
  },
  {
    img: "/posts/html5/logo.png",
    title: "html5",
    route: "/posts/html5",
  },
  {
    img: "/posts/redis/logo.png",
    title: "redis",
    route: "/posts/redis",
  },
  {
    title: "1C",
    route: "/posts/1c",
    img: "/posts/1c/logo.png",
  },
];

const itemDataMobile = [
  {
    title: "JavaScript",
    route: "/posts/javascript",
    img: "/posts/javascript/logo.png",
  },
  {
    title: "TypeScript",
    route: "/posts/typescript",
    img: "posts/typescript/logo.png",
  },
  {
    title: "Docker",
    route: "/posts/docker",
    img: "/posts/docker/logo.png",
  },
  {
    title: "Bash",
    route: "/posts/bash/",
    img: "/posts/bash/logo.png",
  },
  {
    title: "MySQL",
    route: "/posts/mysql",
    img: "/posts/mysql/logo.png",
  },
  {
    title: "React",
    route: "/posts/react",
    img: "/posts/react/logo.png",
  },
  {
    title: "php",
    route: "/posts/php",
    img: "/posts/php/logo.png",
  },
  {
    title: "kubernetes",
    route: "/posts/kubernetes",
    img: "/posts/kubernetes/logo.png",
  },
  // {
  //   img: "/posts/c_sharp/logo.png",
  //   title: "c#",
  //   route: "/posts/c_sharp",
  // },
  // {
  //   title: "node_js",
  //   route: "/posts/node_js",
  //   img: "/posts/node_js/logo.png",
  // },
  // {
  //   title: "yii",
  //   route: "/posts/yii",
  //   img: "/posts/yii/logo.png",
  // },
  // {
  //   img: "/posts/golang/logo.png",
  //   title: "golang",
  //   route: "/posts/golang/logo.png",
  // },
  // {
  //   img: "/posts/html5/logo.png",
  //   title: "html5",
  //   route: "/posts/html5",
  // },
  // {
  //   img: "/posts/redis/logo.png",
  //   title: "redis",
  //   route: "/posts/redis",
  // },
  // {
  //   title: "1C",
  //   route: "/posts/1c",
  //   img: "/posts/1c/logo.png",
  // },
];
