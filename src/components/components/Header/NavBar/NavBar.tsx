import * as React from "react";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Button from "@mui/material/Button";

import { useEffect, useState, useRef } from "react";
import Link from "@mui/material/Link";

import SearchAppBar from "../Search/SearchAppBar";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface Props {
  setSearchTerm: (value: string) => void;
  value: string;
}

function NavBar({ setSearchTerm, value }: Props) {
  const [active, setActive] = useState(localStorage.getItem("active") || "1");

  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);

  const handleClick = (id: any) => {
    setActive(id);
  };

  const navRef = useRef<HTMLElement>(null);

  const showNavBar = () => {
    navRef.current?.classList.toggle("responsive-nav");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F1F1F1",
        width: "100%",
      }}
    >
      <Box>
        <header>
          <Box pb={0.5} sx={{ flexShrink: 0 }}>
            <Link href="/" color="inherit" underline="hover">
              <img
                src="/img/LOGO.png"
                alt="png"
                className={`nav-item ${active === "1" ? "active" : ""}`}
                onClick={() => handleClick(1)}
              />
            </Link>
          </Box>

          <nav ref={navRef}>
            <Box pt={0.5} flexShrink={0}>
              <Link
                href="/how-it-works"
                color="inherit"
                underline="hover"
                sx={{
                  "& img": {
                    transition: "filter 0.3s",
                  },
                  "&:hover img": {
                    filter:
                      "brightness(100%) sepia(1) hue-rotate(-15deg) saturate(1000%)",
                  },
                }}
              >
                <img
                  src="/img/kako funkcionira.png"
                  alt="png"
                  className={`nav-item ${
                    active === "2" ? "active" : ""
                  } responsive-nav`}
                  onClick={() => handleClick(2)}
                />
              </Link>
            </Box>
            <Box
              pt={0.4}
              sx={{
                "& img": {
                  transition: "filter 0.3s",
                },
                "&:hover img": {
                  filter:
                    "brightness(100%) sepia(1) hue-rotate(-15deg) saturate(1000%)",
                },
                flexShrink: 0,
              }}
            >
              <Link href="/menu" color="inherit" underline="hover">
                <img
                  src="/img/meni.png"
                  alt="png"
                  onClick={() => handleClick(5)}
                  className={`nav-item ${active === "5" ? "active" : ""}`}
                />
              </Link>
            </Box>
            <Box
              sx={{
                "& img": {
                  transition: "filter 0.3s",
                  filter: "grayscale(100%)",
                },

                flexShrink: 0,
              }}
            >
              <Link
                href="/"
                color="inherit"
                underline="hover"
                sx={{
                  cursor: "default",
                  pointerEvents: "none",
                  textDecoration: "none",
                }}
              >
                <img
                  src="/img/gotvaci.png"
                  alt="png"
                  onClick={() => handleClick(3)}
                  className={`nav-item ${active === "3" ? "active" : ""}`}
                />
              </Link>
            </Box>
            <Box
              sx={{
                "& img": {
                  transition: "filter 0.3s",
                  filter: "grayscale(100%)",
                },

                flexShrink: 0,
              }}
            >
              <Link
                href="/"
                color="inherit"
                underline="hover"
                sx={{
                  cursor: "default",
                  pointerEvents: "none",
                  textDecoration: "none",
                }}
              >
                <img
                  src="/img/pobaraj ponuda.png"
                  alt="png"
                  onClick={() => handleClick(4)}
                  className={`nav-item ${active === "4" ? "active" : ""}`}
                />
              </Link>
            </Box>

            <Box
              mr={1}
              // ml={2}
              pt={0.8}
              sx={{
                "& img": {
                  transition: "filter 0.3s",
                  filter: "grayscale(100%)",
                },

                flexShrink: 0,
              }}
            >
              <Link
                href="/"
                color="inherit"
                underline="hover"
                // disabled
                sx={{
                  cursor: "default",
                  pointerEvents: "none",
                  textDecoration: "none",
                }}
              >
                <img
                  src="/img/forum.png"
                  alt="png"
                  onClick={() => handleClick(6)}
                  className={`nav-item ${active === "6" ? "active" : ""}`}
                />
              </Link>
            </Box>
            <Button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <CloseIcon />
            </Button>
          </nav>
          <Button className="nav-btn" onClick={showNavBar}>
            <MenuIcon fontSize="large" />
          </Button>
        </header>
      </Box>
      <Box
        sx={{
          flexShrink: 0,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },

            ml: {
              md: 20,
              xl: 80,
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box flexShrink={0}>
            <SearchAppBar setSearchTerm={setSearchTerm} value={value} />
          </Box>

          <Box>
            <Button
              variant="contained"
              color="warning"
              size="small"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#FE724D",
                marginLeft: "20px",
                marginRight: "20px",
                width: "150px",
              }}
            >
              <PersonOutlineOutlinedIcon sx={{ paddingRight: "10px" }} />
              Мој профил
            </Button>
          </Box>

          {/* <Box>
            <Link href="#" color="inherit" underline="hover">
              <IconButton
                size="small"
                edge="start"
                color="default"
                aria-label="logo"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <ShoppingCartOutlinedIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
export default NavBar;
