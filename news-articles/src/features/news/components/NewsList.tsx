import { useEffect, useState } from "react";
import News from "./News";
import { client } from "../../../api/client";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { ArticleDataResponse } from "../../../types";
import { AppLoader } from "../../../components";

export default function NewsList() {
  const [articles, setArticles] = useState<ArticleDataResponse[] | undefined>();
  const [shouldShowLoader, setShowLoader] = useState(false);
  const {
    selectedSource,
    selectedAuthor,
    isSortByDate,
    isSortByTitle,
    sortDateOption,
    sortTitleOption,
  } = useAppSelector((state: RootState) => state.newsFilter);

  useEffect(() => {
    fetchNews();
  }, [
    selectedSource,
    selectedAuthor,
    isSortByDate,
    isSortByTitle,
    sortDateOption,
    sortTitleOption,
  ]);

  const fetchNews = async () => {
    setShowLoader(true);
    try {
      const { data } = await client.get(
        "https://dummy-rest-api.specbee.site/api/v1/news"
      );
      let articleData: ArticleDataResponse[] = [...data];
      if (selectedSource.length > 0)
        articleData = articleData.filter(({ source }) =>
          selectedSource.includes(source)
        );

      if (selectedAuthor.length > 0)
        articleData = articleData.filter(({ author }) =>
          selectedAuthor.includes(author)
        );
      setArticles(articleData);
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <>
      {(articles as [])?.length <= 0 ? (
        <Typography>No articles</Typography>
      ) : (
        (articles as [])?.map(({ image, source, title, date, body }) => (
          <News
            image={image}
            publishDate={date}
            headline={title}
            shortArticle={body}
            category={source}
          />
        ))
      )}
      {shouldShowLoader && <AppLoader />}
    </>
  );
}
