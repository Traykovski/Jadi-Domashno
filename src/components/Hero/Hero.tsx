import {
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import "@fontsource/roboto/400.css";
// import img from "./foood 2.png";
// import DropDownMenu from "../MenuPage/DropDownMenu";
// import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
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
const backgroundImageAnimation = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
  },
};

export default function Hero() {
  const [data, setData] = useState<BannerType>();

  useEffect(() => {
    fetch("http://localhost:8000/banner_content")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  // console.log(data)
  return (
    <>
      <Grid
        container
        marginBottom={14}
        component={motion.div}
        initial={"offscreen"}
        // animate={"onscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 1 }}
        transition={{ staggerChildren: 1 }}
      >
        <Grid item xs={6}>
          <Box
            paddingLeft="100px"
            paddingTop="240px"
            component={motion.div}
            variants={logoAnimate}
           
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img src={data?.logo} alt="logo" />
              <Typography
                variant="h5"
                fontFamily="Roboto"
                fontWeight={400}
                fontSize={57}
                color="#F1592A"
                textTransform={"capitalize"}
              >
                {data?.title}
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontFamily="Bad Script"
              fontWeight={400}
              fontSize={40}
              className="line"
              marginTop={6}
            >
              Вкусот на твоето соседство!
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            marginLeft={24}
            marginTop={2}
            component={motion.div}
            variants={inputButtonAnimate}
          >
            <Box
              pb={16}
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
                marginRight: "100px",
              }}
              noValidate
              autoComplete="off"
            >
              {/* <DropDownMenu /> */}
              <TextField
                id="outlined-basic"
                label="Внеси адреса"
                variant="outlined"
                size="small"
                color="warning"
              />
            </Box>

            <Stack>
              <Box marginBottom={18} textAlign={"center"}>
                <Button
                  variant="contained"
                  color="warning"
                  size="large"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#FE724D",
                    marginTop: "10px",
                    width: "220px",
                    textTransform: "capitalize",
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  {data?.button_title}
                </Button>
              </Box>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            marginTop={20}
            marginLeft={16}
            height={"100%"}
            width={"100%"}
            component={motion.div}
            variants={tavceGravceAnimation}
          >
            <ImageList>
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
            component={motion.div}
            variants={backgroundImageAnimation}
          ></Box>
        </Grid>
        <Box
          className="hero-image2"
          component={motion.div}
          variants={backgroundImageAnimation}
        ></Box>
      </Grid>
      {/* <Box
        className="hero-image2"
        component={motion.div}
        variants={backgroundImageAnimation}
      ></Box> */}
    </>
  );
}
