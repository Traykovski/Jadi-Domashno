import {
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "@fontsource/roboto/400.css";
import { motion } from "framer-motion";

type BannerType = {
  title: string;
  logo: string;
  img: string;
  hero_image_one: string;
  hero_image_two: string;
  subtitle: string;
  button_title: string;
};

// animations
const logoAnimate = {
  offscreen: { scale: 0, opacity: 0 },
  onscreen: {
    opacity: 1,
    rotate: 360,
    scale: 1,
    transition: { type: "spring", stiffness: 10, damping: 2 },
  },
};
const inputButtonAnimate = {
  offscreen: { x: -900, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 7, type: "spring" },
  },
};
const tavceGravceAnimation = {
  offscreen: { x: 900, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 7, type: "spring" },
  },
};

export default function Hero() {
  const [data, setData] = useState<BannerType>();

  useEffect(() => {
    fetch("https://jadi-domashno-json.onrender.com/banner_content")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Grid
        container
        component={motion.div}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 1 }}
        transition={{ staggerChildren: 1 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            marginLeft: {
              xs: "5%",
              sm: "13rem",
              md: "100px",
            },
            paddingTop: {
              xs: "100px",
              sm: "160px",
              md: "240px",
            },
          }}
          component={motion.div}
          variants={logoAnimate}
        >
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <img src={data?.logo} alt="logo" />
            <Typography
              variant="h5"
              fontFamily="Roboto"
              fontWeight={400}
              // fontSize={57}
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "4rem",
                  // md: "4rem"
                },
              }}
              color="#F1592A"
              textTransform={"capitalize"}
            >
              {data?.title}
            </Typography>
          </Box>
          <Box textAlign={"center"} marginBottom={2}>
            <Typography
              variant="subtitle2"
              fontFamily="Bad Script"
              fontWeight={400}
              fontSize={"2rem"}
              // className="line"
              marginTop={3}
              // sx={{
              //   fontSize: {
              //     xs: "2rem",
              //     md: "2rem",
              //   },
              // }}
            >
              Вкусот на твоето соседство!
            </Typography>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              marginLeft: {
                sm: 0,
                md: "11rem",
              },
              flexDirection: {
                xs: "column",
                // sm: "column",
                md: "row",
              },
            }}
            // marginLeft={14}

            // marginTop={2}
            component={motion.div}
            variants={inputButtonAnimate}
          >
            <Box
              // pb={16}
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "30ch" },
                marginRight: "10px",
                pb: {
                  xs: "0",
                  md: "8rem",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Внеси адреса"
                variant="outlined"
                size="small"
                color="warning"
                //  sx={{
                //   width: {
                //     xs: '1%',
                //     sm: '19rem',
                //     md: '100%'
                //   },
                //  }}
              />
            </Box>
            {/* <Stack> */}
            <Box marginBottom={18} textAlign={"center"}>
              <Button
                variant="contained"
                color="warning"
                size="large"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#FE724D",
                  marginTop: "10px",
                  width: {
                    xs: "16rem",
                    sm: "19rem",
                    md: "100%",
                  },

                  textTransform: "capitalize",
                }}
                // component={motion.div}
                // whileHover={{ scale: 1.2 }}
                // whileTap={{ scale: 0.9 }}
                // transition={{
                //   type: "spring",
                //   stiffness: 400,
                //   damping: 17,
                // }}
              >
                {data?.button_title}
              </Button>
            </Box>
            {/* </Stack> */}
          </Box>
        </Grid>

        <Grid
          item
          xs={4}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box
            marginTop={15}
            marginLeft={16}
            // height={"100%"}
            // width={"100%"}
            sx={{
              width: {
                // sm: "0%",
                md: "80%",
              },
              height: {
                // sm: "0%",
                md: "80%",
              },
            }}
            component={motion.div}
            variants={tavceGravceAnimation}
          >
            <ImageList
              className="App-logo"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              <ImageListItem>
                <img
                  src={data?.img}
                  alt="food"
                  className="App-logo"

                  // width={900}
                />
              </ImageListItem>
            </ImageList>
          </Box>
          <Box
            className="hero-image1"
            // component={motion.div}
            // variants={backgroundImageAnimation}
          ></Box>
        </Grid>
        <Box
          className="hero-image2"
          // component={motion.div}
          // variants={backgroundImageAnimation}
        ></Box>
      </Grid>
    </>
  );
}
