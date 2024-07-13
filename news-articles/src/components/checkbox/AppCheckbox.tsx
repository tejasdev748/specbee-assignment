import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { CheckboxProps } from "../../types";

export default function AppCheckbox({
  label,
  isChecked,
  onAppCheckboxChange,
}: CheckboxProps) {
  const handleChange = () => {
    onAppCheckboxChange(label);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          inputProps={{ "aria-label": label }}
          sx={{ pr: 1.25, py: 0, pl: 0 }}
        />
      }
      label={label}
      sx={{
        m: 0,
      }}
    />
  );
}
