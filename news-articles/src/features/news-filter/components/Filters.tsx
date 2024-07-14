import { Stack } from "@mui/material";
import FilterByType from "./FilterByType";
import { NEWS_AUTHOR, NEWS_SOURCE } from "../constants";
import { filterStrings } from "../strings";

export default function Filters() {
  const filterList = [
    {
      title: filterStrings.category,
      options: [...NEWS_SOURCE],
      selected: [NEWS_SOURCE[0]],
    },
    {
      title: filterStrings.author,
      options: [...NEWS_AUTHOR],
      selected: [NEWS_AUTHOR[0]],
    },
  ];

  const onChangeFilter = (filterTitle: string) => (selected: string[]) => {
    console.log(filterTitle, selected);
  };

  return (
    <Stack gap={4}>
      {filterList.map((filterInfo) => (
        <FilterByType
          key={filterInfo.title}
          {...filterInfo}
          updateFilter={onChangeFilter(filterInfo.title)}
        />
      ))}
    </Stack>
  );
}
