import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { useRouter } from "next/router";
import Link from "next/link";

function IconBreadcrumbs(): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const { route } = router;

  console.log("router:");
  console.log(router);

  //function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //  event.preventDefault();
  //  //console.info(HTMLDivElement.);
  //  const router = useRouter();
  //  router.push('/contacts');
  //}
  // onClick={(e) => router.push(slug?.toString())}

  function getRouteName(): string | null {
    switch (router.route.substring(1)) {
      case "contacts":
        return "Контакты";
      case "news":
        return "Новости";
      case "posts":
        return "Статьи";
      case "notes":
        return "Заметки";
      default:
        return "" + slug;
    }
  }

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="text.primary" href={"/"} style={{ cursor: "pointer" }}>
          <a>
            <HomeIcon sx={{ mr: 0.5, ml: 2, pb: 0 }} fontSize="inherit" />{" "}
            Главная
          </a>
        </Link>

        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          {getRouteName()}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

export default IconBreadcrumbs;
