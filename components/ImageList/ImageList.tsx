import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

interface MobileImage {
  image: string;
  title: string;
  route: string;
}

function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
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
              <ImageListItem style={{ cursor: "pointer" }}>
                <img
                  data-w={size.width}
                  data-h={size.height}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    //height: size.height ? (size.height - 24) / 3 : 0,
                    //width: size.width ? (size.width - 128) / 4 : 0,
                    height: size.height ? 305 : 0,
                    width: size.width ? 358 : 0,
                  }}
                />
              </ImageListItem>
            </Link>
          ))
        : itemDataMobile.map((item, index) => (
            <Link href={item.route} key={index}>
              <ImageListItem
                cols={2}
                rows={2}
                sx={{ cursor: "pointer", p: 0.1 }}
              >
                <img
                  data-w={size.width}
                  data-h={size.height}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    padding: 0,
                    height: size.height ? (size.height - 128) / 4 : 0,
                    width: size.width ? (size.width - 24) / 2 : 0,
                  }}
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
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    route: "/",
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
    title: "Breakfast",
    route: "/posts/javascript",
    img: "/languages/javascript/mobile.png",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    route: "/posts/typescript",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    route: "/",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    route: "/",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    route: "/",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    route: "/",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    route: "/",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    route: "/",
  },
];
