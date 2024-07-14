import { NEWS_SOURCE } from "../../news-filter/constants";
import News from "./News";

export default function NewsList() {
  const newsData = {
    image: "/news-image.jpg",
    publishDate: "December 31st 2024",
    headline:
      "Huawei Chips Away At Apple, Nvidia: Revenue Nears $100B As China Flexes Tech Muscle Despite US Sanctions - NVIDIA  ( NASDAQ:NVDA )",
    shortArticle:
      "In a significant year for Huawei Technologies Co., the company's revenue soared by 9% in 2023, nearing a $100 billion milestone, following a surprising breakthrough in chip technology that challenged Apple Inc. AAPL and U.S. sanctions.",
    category: NEWS_SOURCE[0],
  };

  return (
    <>
      <News {...newsData} />
      <News {...newsData} />
    </>
  );
}
