import { useEffect, useState } from "react";
import News from "./News";
import { client } from "../../../api/client";
import { Typography } from "@mui/material";

export default function NewsList() {
  const [articles, setArticles] = useState<[] | undefined>();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await client.get(
        "https://dummy-rest-api.specbee.site/api/v1/news"
      );
      setArticles(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if ((articles as [])?.length <= 0)
    return <Typography>No articles</Typography>;
  return (articles as [])?.map(({ image, source, title, date, body }) => (
    <News
      image={image}
      publishDate={date}
      headline={title}
      shortArticle={body}
      category={source}
    />
  ));
}
