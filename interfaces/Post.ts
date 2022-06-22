import { ReactNode } from "react";
//import { ReactElement } from "react-markdown/lib/react-markdown";

export default interface PostInterface {
  title:string;
  created_date: string;
  author: string;
  url: string;
  description: string;
  post: string;
  image: string;
}
