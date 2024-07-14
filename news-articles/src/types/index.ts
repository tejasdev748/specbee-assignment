export interface CheckboxProps {
  isChecked: boolean;
  label: string;
  onAppCheckboxChange: (label: string) => void;
}
export interface NewsProps {
  image: string;
  publishDate: string;
  headline: string;
  shortArticle: string;
  category: string;
}

export interface FilterTypeProps {
  title: string;
  options: string[];
  selected: string[];
  updateFilter: (updatedValues: string[]) => void;
}
