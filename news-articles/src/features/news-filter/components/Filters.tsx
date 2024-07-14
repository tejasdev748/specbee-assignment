import { Box } from "@mui/material";
import FilterByType from "./FilterByType";
import { NEWS_AUTHOR, NEWS_SOURCE } from "../constants";
import { filterStrings } from "../strings";

export default function Filters() {
  const filterList = [
    { title: filterStrings.category, options: [...NEWS_SOURCE], selected: [] },
    { title: filterStrings.author, options: [...NEWS_AUTHOR], selected: [] },
  ];

  const onChangeFilter = (filterTitle: string) => (selected: string[]) => {
    console.log(filterTitle, selected);
  };

  return (
    <Box>
      {filterList.map((filterInfo) => (
        <FilterByType
          key={filterInfo.title}
          {...filterInfo}
          updateFilter={onChangeFilter(filterInfo.title)}
        />
      ))}
    </Box>
  );
}
