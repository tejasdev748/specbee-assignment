import { Pagination, useTheme } from "@mui/material";

function AppPagination() {
  const theme = useTheme();
  return (
    <Pagination
      count={3}
      sx={{
        "& .MuiPaginationItem-page": {
          fontSize: theme.font.sizeSm,
          lineHeight: theme.font.sizeLg,
          fontWeight: theme.typography.fontWeightBold,
          fontFamily: theme.font.family,
        },
        "&  .Mui-selected": {
          background: "#1E2128",
          color: "#FFFFFF",
        },
      }}
    />
  );
}

export default AppPagination;
