import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

type FamilyType = {
  image_one: string;
  title: string;
  image_two: string;
  text_one: string;
  text_two: string;
};

const backgroundImageAnimation = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
  },
};
const inputButtonAnimate = {
  offscreen: { x: -900, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 4, type: "spring" },
  },
};
const popUp = {
  offscreen: { opacity: 0, scale: 0.5 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

export default function Family() {
  const [data, setData] = useState<FamilyType>();

  useEffect(() => {
    fetch("http://localhost:8000/family")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Container
      component={motion.div}
      initial={"offscreen"}
      // animate={"onscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <Grid container>
        <Box
          className="cooks-img5"
          component={motion.div}
          variants={backgroundImageAnimation}
        ></Box>
        <Box
          className="cooks-img6"
          component={motion.div}
          variants={backgroundImageAnimation}
        ></Box>
        <Box
          className="cooks-img7"
          component={motion.div}
          variants={backgroundImageAnimation}
        ></Box>
        <Grid item xs={5}>
          <Box
            pt={4}
            pl={13}
            width={"80%"}
            component={motion.div}
            variants={inputButtonAnimate}
          >
            <hr color="#F1592A" />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box pl={6} component={motion.div} variants={inputButtonAnimate}>
            <img src="./img/домат 1.png" alt="tomato" />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            pt={4}
            width={"80%"}
            component={motion.div}
            variants={inputButtonAnimate}
          >
            <hr color="#F1592A" />
          </Box>
        </Grid>
      </Grid>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={4}
        component={motion.div}
        variants={inputButtonAnimate}
      >
        <Typography pr={1} fontWeight={400} fontSize={37}>
          Стани дел од семејството
        </Typography>
        <Typography color={"#F1592A"} fontWeight={400} fontSize={37}>
          Јади Домашно
        </Typography>
      </Box>
      <Grid container mt={8} color={"#FE724D"} fontWeight={600} fontSize={66}>
        <Grid item xs={6} pl={10} textAlign={"center"}>
          <Box component={motion.div} variants={popUp}>
            <motion.img
              src={data?.image_one}
              alt="icon"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />

            <Typography
              variant="subtitle2"
              fontWeight={400}
              color={"#000000"}
              fontSize={24}
            >
              {data?.text_one}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          pl={10}
          textAlign={"center"}
          component={motion.div}
          variants={popUp}
        >
          <motion.img
            src={data?.image_two}
            alt="icon"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color={"#000000"}
            fontSize={24}
          >
            {data?.text_two}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <Box
            pt={4}
            ml={13}
            width={"90%"}
            component={motion.div}
            variants={inputButtonAnimate}
          >
            <hr color="#F1592A" />
          </Box>
        </Grid>

        <Grid item xs={2}>
          <Box pt={4}></Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            pt={4}
            width={"90%"}
            component={motion.div}
            variants={inputButtonAnimate}
          >
            <hr color="#F1592A" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
