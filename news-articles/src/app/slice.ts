import { createSlice } from "@reduxjs/toolkit";

export type DateSorting = "latest" | "earliest";
export type TitleSorting = "ascending" | "descending";
export interface FilterSlice {
  selectedSource: string[];
  selectedAuthor: string[];
  isSortByDate: boolean;
  isSortByTitle: boolean;
  sortDateOption: DateSorting;
  sortTitleOption: TitleSorting;
}

const initialState: FilterSlice = {
  selectedSource: [],
  selectedAuthor: [],
  isSortByDate: false,
  isSortByTitle: false,
  sortDateOption: "latest",
  sortTitleOption: "ascending",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSource: (state, action) => {
      state.selectedSource = [...action.payload];
    },
    updateAuthor: (state, action) => {
      state.selectedAuthor = [...action.payload];
    },
    onToggleSortByDate: (state, action) => {
      state.isSortByDate = action.payload;
    },
    onToggleSortByTitle: (state, action) => {
      state.isSortByTitle = action.payload;
    },
    updateDateSorting: (state) => {
      state.sortDateOption =
        state.sortDateOption === "earliest" ? "latest" : "earliest";
    },
    updateTitleSorting: (state) => {
      state.sortTitleOption =
        state.sortTitleOption === "ascending" ? "descending" : "ascending";
    },
  },
});

export const {
  updateSource,
  updateAuthor,
  onToggleSortByDate,
  onToggleSortByTitle,
  updateDateSorting,
  updateTitleSorting,
} = filterSlice.actions;

export default filterSlice.reducer;
