import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function Post({ name }: any) {
  console.log("name: " + name);

  const router = useRouter();
  const [post, setPost] = useState("");

  var path = router.query.slug + "/" + router.query.postname;

  useEffect(() => {
    (async function loadPost() {
      var filename = router.query.postname;
      console.log("router.query: ");
      console.log(router.query);

      // add year to post path

      if (filename) {
        const post = (
          await import(
            "../../../markdown/" + router.query.slug + "/" + filename + ".md"
          )
        ).default;
        setPost(post);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("useEffext-post");
    console.log(post);
  }, [post]);
  return <ReactMarkdown children={post} />;
}

Post.getInitialProps = async () => {
  console.log("getInitialProps");
  return {};
};

export default Post;
