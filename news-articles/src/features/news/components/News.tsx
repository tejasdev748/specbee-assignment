import { Stack, Box, Typography } from "@mui/material";
import { NewsProps } from "../../../types";

export default function News({
  image,
  publishDate,
  headline,
  shortArticle,
  category,
}: NewsProps) {
  return (
    <Box className="news-box" display="flex" flexDirection={"column"} gap={3.5}>
      <Stack direction={"row"} gap={2.5}>
        <Box component="img" src={image} />
        <Stack>
          <Typography variant="caption">{publishDate}</Typography>
          <Typography component="article" variant="h6">
            {headline}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        component="article"
        variant="body1"
        className="short-article-div"
      >
        {shortArticle}
      </Typography>
      <Typography variant="subtitle1">{category}</Typography>
    </Box>
  );
}
