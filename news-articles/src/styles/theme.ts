import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Theme {
    font: {
      sizeXs: number;
      sizeSm: number;
      sizeMd: number;
      sizeLg: number;
      sizeXl: number;
      family: string;
    };
    color: {
      text: string;
      selection: string;
      menuBackground: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    font?: {
      sizeXs?: number;
      sizeSm?: number;
      sizeMd?: number;
      sizeLg?: number;
      sizeXl?: number;
      family?: string;
    };
    color?: {
      text?: string;
      selection?: string;
      menuBackground?: string;
    };
  }
}

export const theme = createTheme({
  font: {
    sizeXs: 10,
    sizeSm: 12,
    sizeMd: 14,
    sizeLg: 16,
    sizeXl: 18,
    family: "Inter",
  },
  color: {
    text: "#171A1F",
    selection: "#5113D7",
    menuBackground: "#F8F9FA",
  },
});
