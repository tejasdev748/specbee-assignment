import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import Filters from "./features/news-filter/components/Filters";
import News from "./features/news/components/News";
import { NEWS_SOURCE } from "./features/news-filter/constants";
const drawerWidth = 240;

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();

  const showFilter = () => (
    <Box
      flexGrow={1}
      width={{ md: "17.5rem" }}
      borderRadius={{ md: "0.325rem" }}
      boxShadow={{
        md: "0px 0px 2px rgba(23, 26, 31, 0.12), 0px 0px 1px rgba(23, 26, 31, 0.07);",
      }}
      px={1.5}
      py={2}
      sx={(theme) => ({
        display: "block",
        [theme.breakpoints.down("md")]: {
          display: isDrawerOpen ? "block" : "none",
        },
        [`${theme.breakpoints.down("md")} and (orientation: landscape)`]: {
          display: isDrawerOpen ? "block" : "none",
        },
      })}
    >
      <Filters />
    </Box>
  );

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const newsData = {
    image: "/news-image.jpg",
    publishDate: "December 31st 2024",
    headline:
      "Huawei Chips Away At Apple, Nvidia: Revenue Nears $100B As China Flexes Tech Muscle Despite US Sanctions - NVIDIA  ( NASDAQ:NVDA )",
    shortArticle:
      "In a significant year for Huawei Technologies Co., the company's revenue soared by 9% in 2023, nearing a $100 billion milestone, following a surprising breakthrough in chip technology that challenged Apple Inc. AAPL and U.S. sanctions.",
    category: NEWS_SOURCE[0],
  };

  return (
    <Container
      maxWidth={false}
      sx={{ height: "100%", bgcolor: theme.color.appBackground }}
      disableGutters
    >
      <AppBar
        component="nav"
        position="sticky"
        sx={(theme) => ({
          display: "none",
          [theme.breakpoints.down("md")]: {
            display: "block",
          },
          [`${theme.breakpoints.down("md")} and (orientation: landscape)`]: {
            display: "block",
          },
          height: "3.5rem",
          bgcolor: theme.color.appBackground,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="isDrawerOpen drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ color: theme.color.selection }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              display: "block",
            },
            [`${theme.breakpoints.down("md")} and (orientation: landscape)`]: {
              display: "block",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          })}
        >
          {showFilter()}
        </Drawer>
      </nav>
      <Box bgcolor={"#ffffff"} p={{ xs: 3, sm: "5rem" }}>
        <Stack direction={"row"} height={"100%"} gap={{ sm: "2.5rem" }}>
          {!isDrawerOpen && showFilter()}
          <Box flexGrow={1} sx={{ width: "calc(100% - 17.5rem)" }}>
            <News {...newsData} />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
