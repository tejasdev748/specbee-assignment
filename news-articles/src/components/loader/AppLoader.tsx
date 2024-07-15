import { Box, Backdrop } from "@mui/material";
import "./loader.scss";

export function AppLoader() {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Box className="loader"></Box>
    </Backdrop>
  );
}
