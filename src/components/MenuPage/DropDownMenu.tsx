import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const names = [
  "Алексо Демниевски-Бауман",
  "Герника",
  "Скупи",
  "Антон Чехов",
  "Арсениј Јовков",
  "Апостол Секуловски-Гусларот",
  "Архимедова ",
  "Андреа Зограф",
  "Андон Папрадишки",
  "Александар Пушкин ",
];

export default function DropDownMenu() {
  const [name, setName] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 220, backgroundColor: "white" }}>
        <Select
          value={name}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className="select"
        >
          <MenuItem value="">
            <em>Локација</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name} sx={{ fontSize: "12px" }}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
