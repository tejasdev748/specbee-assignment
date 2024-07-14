import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import { FilterTypeProps } from "../../../types";
import AppCheckbox from "../../../components/checkbox/AppCheckbox";

export default function FilterByType({
  title,
  options,
  selected,
  updateFilter,
}: FilterTypeProps) {
  const theme = useTheme();
  const onFilterChange = (selectedOption: string) =>
    updateFilter(
      selected.includes(selectedOption)
        ? selected.filter((item) => item !== selectedOption)
        : selected.concat(selectedOption)
    );

  return (
    <Box>
      <Stack gap={1.25}>
        <Card
          sx={{
            bgcolor: theme.color.menuBackground,
            py: 0.75,
            px: 1.25,
            borderRadius: 1,
            boxShadow: "none",
          }}
        >
          <Typography
            sx={{
              fontFamily: theme.font.family,
              fontSize: theme.font.sizeMd,
              lineHeight: theme.font.sizeXl,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            {title}
          </Typography>
        </Card>
        <Stack gap={1.25} sx={{ px: 1.5 }}>
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
