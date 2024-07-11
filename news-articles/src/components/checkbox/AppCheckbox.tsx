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
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleChange}
            inputProps={{ "aria-label": label }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
