import { Box } from "@mui/material";
import FilterByType from "./FilterByType";

export default function Filters() {
  const filterList = [
    { title: "Category", options: ["1", "2", "3"], selected: [] },
    { title: "Author", options: ["4", "5", "6"], selected: [] },
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
