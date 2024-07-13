import { Box, Card, Stack } from "@mui/material";
import { FilterTypeProps } from "../../../types";
import AppCheckbox from "../../../components/checkbox/AppCheckbox";

export default function FilterByType({
  title,
  options,
  selected,
  updateFilter,
}: FilterTypeProps) {
  const onFilterChange = (selectedOption: string) =>
    updateFilter(
      selected.includes(selectedOption)
        ? selected.filter((item) => item !== selectedOption)
        : selected.concat(selectedOption)
    );

  return (
    <Box>
      <Stack gap={2}>
        <Card>{title}</Card>
        <Stack>
          {options.map((optionItem) => (
            <AppCheckbox
              key={optionItem}
              label={optionItem}
              isChecked={selected.includes(optionItem)}
              onAppCheckboxChange={onFilterChange}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
