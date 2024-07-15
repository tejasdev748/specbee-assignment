import { Stack, Box } from "@mui/material";
import FilterByType from "./FilterByType";
import { NEWS_AUTHOR, NEWS_SORT_BY, NEWS_SOURCE } from "../constants";
import { filterStrings } from "../strings";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hooks";
import {
  onToggleSortByDate,
  onToggleSortByTitle,
  updateAuthor,
  updateDateSorting,
  updateSource,
  updateTitleSorting,
} from "../../../app/slice";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Filters() {
  const {
    selectedSource,
    selectedAuthor,
    isSortByDate,
    isSortByTitle,
    sortDateOption,
    sortTitleOption,
  } = useSelector((state: RootState) => state.newsFilter);
  const dispatch = useAppDispatch();

  const handleDateSorting = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.preventDefault();
    dispatch(updateDateSorting());
  };

  const handleTitleSorting = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.preventDefault();
    dispatch(updateTitleSorting());
  };

  const filterList = [
    {
      title: filterStrings.category,
      options: [...NEWS_SOURCE],
      selected: selectedSource,
    },
    {
      title: filterStrings.author,
      options: [...NEWS_AUTHOR],
      selected: selectedAuthor,
    },
    {
      title: filterStrings.sortBy,
      options: [...NEWS_SORT_BY],
      selected:
        isSortByDate && isSortByTitle
          ? [...NEWS_SORT_BY]
          : isSortByDate
            ? [NEWS_SORT_BY[0]]
            : isSortByTitle
              ? [NEWS_SORT_BY[1]]
              : [],
      sortOptions: {
        [NEWS_SORT_BY[0]]: isSortByDate ? (
          <Box component={"div"} onClick={handleDateSorting}>
            {sortDateOption === "latest" ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )}
          </Box>
        ) : null,
        [NEWS_SORT_BY[1]]: isSortByTitle ? (
          <Box component={"div"} onClick={handleTitleSorting}>
            {sortTitleOption === "ascending" ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )}
          </Box>
        ) : null,
      },
    },
  ];

  const onChangeFilter = (filterTitle: string) => (selected: string[]) => {
    if (filterTitle === filterStrings.category)
      dispatch(updateSource(selected));
    else if (filterTitle === filterStrings.author)
      dispatch(updateAuthor(selected));
    else {
      if (selected.includes(NEWS_SORT_BY[0]) && !isSortByDate)
        dispatch(onToggleSortByDate(true));
      else if (!selected.includes(NEWS_SORT_BY[0]) && isSortByDate)
        dispatch(onToggleSortByDate(false));
      else if (selected.includes(NEWS_SORT_BY[1]) && !isSortByTitle)
        dispatch(onToggleSortByTitle(true));
      else dispatch(onToggleSortByTitle(false));
    }
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
