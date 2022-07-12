import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Contacts from "../TabPanel/Contacts";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        paddingLeft: 2,
        paddingTop: 0,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider", paddingLeft: 2 }}>
        <Tabs value={value} onChange={handleChange} aria-label="example">
          <Tab label="Обо мне" {...a11yProps(0)} />
          <Tab label="Проекты" {...a11yProps(1)} />
          <Tab label="Контакты" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Проекты
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contacts />
      </TabPanel>
    </Box>
  );
}
