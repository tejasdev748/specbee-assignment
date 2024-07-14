import { FormControlLabel, FormGroup, Box, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { CheckboxProps } from "../../types";

export default function AppCheckbox({
  label,
  isChecked,
  onAppCheckboxChange,
  children,
}: CheckboxProps) {
  const handleChange = () => {
    onAppCheckboxChange(label);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleChange}
            inputProps={{ "aria-label": label }}
            sx={{ pr: 1.25, py: 0, pl: 0 }}
          />
        }
        label={
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <Box>{label}</Box>
            {children ? (
              <Box display={"flex"} marginLeft={"auto"}>
                {children}
              </Box>
            ) : null}
          </Stack>
        }
        sx={{
          m: 0,
          "& .MuiTypography-root": {
            flexGrow: 1,
          },
        }}
      />
    </>
  );
}
