import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Theme {
    font: {
      sizeXs: string;
      sizeSm: string;
      sizeMd: string;
      sizeLg: string;
      sizeXl: string;
      family: string;
    };
    color: {
      text: string;
      selection: string;
      menuBackground: string;
      appBackground: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    font?: {
      sizeXs?: string;
      sizeSm?: string;
      sizeMd?: string;
      sizeLg?: string;
      sizeXl?: string;
      family?: string;
    };
    color?: {
      text?: string;
      selection?: string;
      menuBackground?: string;
      appBackground?: string;
    };
  }
}

export const theme = createTheme({
  font: {
    sizeXs: "0.75rem",
    sizeSm: "0.875rem",
    sizeMd: "1rem",
    sizeLg: "1.25rem",
    sizeXl: "1.5rem",
    family: "Inter",
  },
  color: {
    text: "#171A1F",
    selection: "#5113D7",
    menuBackground: "#F8F9FA",
    appBackground: "#FFFFFF",
  },
});
