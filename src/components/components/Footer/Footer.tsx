// import React from 'react'
import React from "react";
import {
  BottomNavigation,
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#262D2F",
        height: "30%",
        paddingTop: "40px",
        paddingBottom: "20px",
        paddingLeft: {
          xs: "80px",
          sm: "40px",
        },
        paddingRight: {
          xs: "60px",
          sm: 0,
        },

        marginTop: "70px",
      }}
    >
      <Grid container color="#D7D7D7">
        <Grid item xs={12} sm={4} md={3}>
          <Box display={"flex"}>
            <Box>
              <img src="/img/logo-jadi-domasno 1.png" alt="logo" />
            </Box>
            <Box>
              <Typography variant="h4" textAlign="justify">
                Јади <br />
                Домашно
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="justify"
                marginTop={1}
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                Јадете здраво. Јадете подобро.
              </Typography>
            </Box>
          </Box>
          <Box marginTop="30px" display="flex">
            <Box mr={2}>
              <Typography
                component="a"
                href="https://www.facebook.com/"
                color="#D7D7D7"
                className="footer-hover"
              >
                <FacebookIcon fontSize="large" />
              </Typography>
            </Box>
            <Box mr={2}>
              <Typography
                component="a"
                href="https://twitter.com/"
                color="#D7D7D7"
                className="footer-hover"
              >
                <TwitterIcon fontSize="large" />
              </Typography>
            </Box>
            <Box mr={2}>
              <Typography
                component="a"
                href="https://www.instagram.com/"
                color="#D7D7D7"
                className="footer-hover"
              >
                <Instagram fontSize="large" />
              </Typography>
            </Box>
            <Box>
              <Typography
                component="a"
                href="https://www.youtube.com/"
                color="#D7D7D7"
                className="footer-hover"
              >
                <YouTubeIcon fontSize="large" />
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={4}
          md={3}
          textAlign="justify"
          pt={3}
          sx={{
            pl: {
              xs: "7rem",
              sm: "4rem",
              md: "6rem",
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <Box>
            <Link href="#" color="#D7D7D7">
              За нас
            </Link>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Link href="#" color="#D7D7D7">
              Мени
            </Link>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Link href="#" color="#D7D7D7">
              Стани готвач
            </Link>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Link href="#" color="#D7D7D7">
              Најави се
            </Link>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Link href="#" color="#D7D7D7">
              FAQ
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          textAlign="justify"
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Typography>Правни</Typography>
          <Box sx={{ paddingTop: "10px" }}>
            <Link underline="hover" color="#D7D7D7" href="/">
              Политика за приватност
            </Link>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Link underline="hover" color="#D7D7D7" href="/">
              Услови за веб-страница
            </Link>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Link underline="hover" color="#D7D7D7" href="/">
              Прифатлива политика за користење
            </Link>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Link underline="hover" color="#D7D7D7" href="/">
              Политика за колачиња
            </Link>
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Link underline="hover" color="#D7D7D7" href="/">
              Општи услови
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Box sx={{ display: "inline-block" }}>
            <Typography variant="subtitle1">Пратете ги новостите</Typography>
            <Stack display="block" direction="row" color="#939393">
              <TextField
                label="Електронска пошта"
                type="email"
                size="small"
                id="margin-normal"
                margin="normal"
              />
            </Stack>
            <Stack>
              <Button
                variant="contained"
                color="warning"
                size="large"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#FE724D",
                  marginTop: "10px",
                }}
              >
                Претплати се!
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
}
