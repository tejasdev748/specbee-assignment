import { Pagination, useTheme } from "@mui/material";
import { PaginationProps } from "../../types";

function AppPagination({
  activePage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const theme = useTheme();
  return (
    <Pagination
      page={activePage}
      count={totalPages}
      sx={{
        "& .MuiPaginationItem-page": {
          fontSize: theme.font.sizeSm,
          lineHeight: theme.font.sizeLg,
          fontWeight: theme.typography.fontWeightBold,
          fontFamily: theme.font.family,
        },
        "& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected": {
          background: "#1E2128",
          color: "#FFFFFF",
        },
        "& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected:hover": {
          background: "#1E2128",
          color: "#FFFFFF",
        },
      }}
      onChange={onPageChange}
    />
  );
}

export default AppPagination;
