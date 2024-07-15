import { Stack, Box, Typography, useTheme, Divider } from "@mui/material";
import { NewsProps } from "../../../types";

export default function News({
  image,
  publishDate,
  headline,
  shortArticle,
  category,
  author,
}: NewsProps) {
  const theme = useTheme();
  return (
    <Stack gap={3.5}>
      <Stack direction={"row"} gap={2.5}>
        <Box
          component="img"
          src={image}
          width={"5.625rem"}
          height={"4.5rem"}
          borderRadius={2}
        />
        <Stack>
          <Stack direction={{ xs: "column", sm: "row" }}>
            <Typography
              sx={{
                fontSize: theme.font.sizeXs,
                lineHeight: theme.font.sizeLg,
                fontFamily: theme.font.family,
                color: theme.color.textLight,
              }}
            >
              {publishDate}
            </Typography>
            <Typography
              sx={{
                fontSize: theme.font.sizeXs,
                lineHeight: theme.font.sizeLg,
                fontFamily: theme.font.family,
                color: theme.color.textLight,
                marginLeft: { xs: "0", sm: "auto" },
              }}
            >
              {category}
            </Typography>
          </Stack>

          <Typography
            component="article"
            sx={{
              fontSize: theme.font.sizeMd,
              lineHeight: "1.625rem",
              fontFamily: theme.font.family,
              color: theme.color.text,
              fontWeight: theme.typography.fontWeightBold,
              display: { xs: "none", sm: "block" },
            }}
          >
            {headline}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        component="article"
        sx={{
          fontSize: theme.font.sizeMd,
          lineHeight: "1.625rem",
          fontFamily: theme.font.family,
          color: theme.color.text,
          fontWeight: theme.typography.fontWeightBold,
          display: { xs: "block", sm: "none" },
        }}
      >
        {headline}
      </Typography>
      <Typography
        component="article"
        sx={{
          fontSize: theme.font.sizeSm,
          lineHeight: "1.375rem",
          fontFamily: theme.font.family,
          color: theme.color.text,
          fontWeight: theme.typography.fontWeightRegular,
        }}
      >
        {shortArticle}
      </Typography>
      <Typography
        sx={{
          fontSize: theme.font.sizeXs,
          lineHeight: theme.font.sizeLg,
          fontFamily: theme.font.family,
          color: theme.color.text,
          fontWeight: theme.typography.fontWeightBold,
        }}
      >
        {author}
      </Typography>
      <Divider
        sx={{
          border: "1px solid #DEE1E6",
        }}
      ></Divider>
    </Stack>
  );
}
