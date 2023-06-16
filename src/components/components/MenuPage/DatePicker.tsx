import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { Box } from "@mui/material";

export default function BasicDatePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      sx={{ borderRadius: "15px" }}
    >
      <Box mt={2}  sx={{
        marginLeft: {
          xs: 1,
          sm: 5
        }
      }}>
        <DatePicker
          label="Одбери ден"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          
        />
      </Box>
      <Box mt={2} sx={{
        marginLeft: {
          xs: 1,
          sm: 5
        }
      }}>
        <TimePicker
          label="Одбери време"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
}
