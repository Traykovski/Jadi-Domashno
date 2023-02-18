import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Stack,
  Button,
  Link,
} from "@mui/material";

import SearchAppBar from "../Search/SearchAppBar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface Props {
  setSearchTerm: (value: string) => void;
  value: string;
}

export default function NavBar({ setSearchTerm, value }: Props) {
  const [active, setActive] = useState(localStorage.getItem("active") || "1");

  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);

  const handleClick = (id: any) => {
    setActive(id);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#F1F1F1",
        height: "10vh",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          color="#7C7C7C"
          marginRight="30em"
        >
          <Box pb={0.5}>
            <Link href="/" color="inherit" underline="hover">
              <img
                src="/img/LOGO.png"
                alt="png"
                className={`nav-item ${active === "1" ? "active" : ""}`}
                onClick={() => handleClick(1)}
                // style={active === "1" ? { filter: "hue-rotate(10deg)" } : {}}
              />
            </Link>
          </Box>
          <Box pt={0.5}>
            <Link href="/how-it-works" color="inherit" underline="hover">
              <img
                src="/img/kako funkcionira.png"
                alt="png"
                className={`nav-item ${active === "2" ? "active" : ""}`}
                onClick={() => handleClick(2)}
                // style={active === "2" ? { filter: "hue-rotate(10deg)" } : {}}
              />
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              <img
                src="/img/gotvaci.png"
                alt="png"
                onClick={() => handleClick(3)}
                className={`nav-item ${active === "3" ? "active" : ""}`}
                // style={active === "3" ? { filter: "hue-rotate(10deg)" } : {}}
              />
            </Link>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              <img
                src="/img/pobaraj ponuda.png"
                alt="png"
                onClick={() => handleClick(4)}
                className={`nav-item ${active === "4" ? "active" : ""}`}
              />
            </Link>
          </Box>
          <Box pt={0.4}>
            <Link href="/menu" color="inherit" underline="hover">
              <img
                src="/img/meni.png"
                alt="png"
                onClick={() => handleClick(5)}
                className={`nav-item ${active === "5" ? "active" : ""}`}
              />
            </Link>
          </Box>
          <Box pt={0.8}>
            <Link href="/" color="inherit" underline="hover">
              <img
                src="/img/forum.png"
                alt="png"
                onClick={() => handleClick(6)}
                className={`nav-item ${active === "6" ? "active" : ""}`}
              />
            </Link>
          </Box>
        </Stack>

        <Box sx={{ flexGrow: 0, color: "#7C7C7C", backgroundColor: "#FFF8F0" }}>
          <SearchAppBar setSearchTerm={setSearchTerm} value={value} />
        </Box>

        <Stack>
          <Button
            variant="contained"
            color="warning"
            size="small"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#FE724D",
              marginLeft: "40px",
              marginRight: "40px",
              width: "160px",
            }}
          >
            <PersonOutlineOutlinedIcon sx={{ paddingRight: "10px" }} /> Мој
            профил
          </Button>
        </Stack>

        <Link href="#" color="inherit" underline="hover">
          <IconButton
            size="small"
            edge="start"
            color="default"
            aria-label="logo"
            sx={{ marginLeft: "5px" }}
          >
            <ShoppingCartOutlinedIcon fontSize="large" />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
