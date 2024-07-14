import {
  FormControlLabel,
  FormGroup,
  Box,
  Stack,
  useTheme,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { CheckboxProps } from "../../types";

export default function AppCheckbox({
  label,
  isChecked,
  onAppCheckboxChange,
  children,
}: CheckboxProps) {
  const theme = useTheme();

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
            <Box
              sx={{
                fontSize: theme.font.sizeSm,
                lineHeight: theme.font.sizeLg,
                fontFamily: theme.font.family,
              }}
            >
              {label}
            </Box>
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
