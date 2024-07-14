import { Stack, Box, Typography, useTheme } from "@mui/material";
import { NewsProps } from "../../../types";

export default function News({
  image,
  publishDate,
  headline,
  shortArticle,
  category,
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
            component="article"
            sx={{
              fontSize: theme.font.sizeMd,
              lineHeight: "1.625rem",
              fontFamily: theme.font.family,
              color: theme.color.text,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            {headline}
          </Typography>
        </Stack>
      </Stack>
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
        {category}
      </Typography>
    </Stack>
  );
}
