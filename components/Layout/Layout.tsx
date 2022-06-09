import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useTheme, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactElement } from "react-markdown/lib/react-markdown";
import MobileTemplate from "../Templates/Mobile";
import DesktopTemplate from "../Templates/Desktop";
import { LayoutProps } from "./Layout.props";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[100],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return isMobile ? (
    <MobileTemplate>{children}</MobileTemplate>
  ) : (
    <DesktopTemplate>{children}</DesktopTemplate>
  );
};

export default Layout;
