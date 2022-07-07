import GistsInterface from "../../Gists/interfaces/GistsInterface";
import Owner from "./Owner";

export interface GistItem {
  id: string;
  url: string;
  public: boolean;
  created_at: string;
  updated_at: string;
  comments: number;
  comments_url: string;
  description: string;
  user: string | null;
  owner: Owner;
  type: string; // ?
  files: object[];
  filename: string;
  //[files: number]: {};
  //[key: string]: any;
}
