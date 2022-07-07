export default interface GistsInterface extends Object {
  content?: string;
  gist_id?: string | string[];
  created_date?: string | undefined;
  author?: string;
  raw_url?: string;
  type?: string;
}
