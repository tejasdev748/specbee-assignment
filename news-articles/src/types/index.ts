export interface CheckboxProps {
  isChecked: boolean;
  label: string;
  onAppCheckboxChange: (label: string) => void;
  children?: React.ReactNode;
}
export interface NewsProps {
  image: string;
  publishDate: string;
  headline: string;
  shortArticle: string;
  category: string;
  author: string;
}

export interface FilterTypeProps {
  title: string;
  options: string[];
  selected: string[];
  updateFilter: (updatedValues: string[]) => void;
  sortOptions?: Record<string,React.ReactNode>;
}

export interface ArticleDataResponse {
  title: string;
  url: string;
  image: string;
  date: string;
  body: string;
  source: string;
  author: string;
}

export interface PaginationProps {
  activePage: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
