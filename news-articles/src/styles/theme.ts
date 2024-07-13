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
});
