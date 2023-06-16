import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Context as MenuContext,
  MenuInterface,
} from "../../../../context/menuContext";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // "&:hover": {
  //   // backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginLeft: 0,
  width: "100%",
  height: '35px',
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface Props {
  setSearchTerm: (value: string) => void;
  value: string;
}

export default function SearchAppBar({ setSearchTerm, value }: Props) {
  const { menu } = useContext(MenuContext);

  const [filteredMenu, setFilteredMenu] = useState<MenuInterface[]>([]);

  const handleFilteredMenu = (event: any) => {
    const search = event.target.value;
    const newFilterMenu = menu.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });

    if (search === "") {
      setFilteredMenu([]);
    } else {
      setFilteredMenu(newFilterMenu);
    }
  };

  return (
    <>
      <Search sx={{backgroundColor: "white", color:"black", borderRadius: "20px"}} >
        <SearchIconWrapper >
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          type="text"
          size="small"
          placeholder="Пребарувај…"
          inputProps={{ "aria-label": "search" }}
          className="search-bar"
          onChange={handleFilteredMenu}
          
        />
      </Search>
      {filteredMenu.length !== 0 && (
        <Box position={"relative"}>
          <Box position={"absolute"} mt={2} className="menu-result">
            {filteredMenu.map((n) => {
              return (
                <Box>
                  <Typography
                    component={Link}
                    to="/menu"
                    className="menu-item"
                    pl={1}
                  >
                    {n.name}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </>
  );
}
