import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ImageList from "../components/ImageList/ImageList";

//import ImageList from "@mui/material/ImageList";

const Home: NextPage = () => {
  return <ImageList />;
};

export default Home;
