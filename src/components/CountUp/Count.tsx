import React from "react";
import CountUp, { useCountUp } from "react-countup";
import { Container } from "@mui/system";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

const inputButtonAnimate = {
  offscreen: { x: -900, opacity: 0 },
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

export default function Count() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 2000,
  });
  return (
    <Container
      component={motion.div}
      initial={"offscreen"}
      // animate={"onscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <Box
        className="cooks-img3"
        component={motion.div}
        variants={backgroundImageAnimation}
      ></Box>
      <Box
        className="cooks-img4"
        component={motion.div}
        variants={backgroundImageAnimation}
      ></Box>
      <Box component={motion.div} variants={inputButtonAnimate}>
        <hr color="#F1592A" />
      </Box>
      <Grid
        container
        mt={4}
        mb={2}
        color={"#FE724D"}
        fontWeight={600}
        fontSize={66}
      >
        <Grid
          item
          xs={4}
          pl={10}
          textAlign={"center"}
          component={motion.div}
          variants={popUp}
        >
          <Box>
            <Box>
              <img src="./img/Heart.png" alt="icon" />
            </Box>
            <CountUp start={0} end={10900} duration={5.75} enableScrollSpy />+
            <Typography
              variant="subtitle2"
              fontFamily="Bad Script"
              fontWeight={400}
              color={"#000000"}
              fontSize={40}
            >
              задоволни клиенти
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          pl={10}
          textAlign={"center"}
          component={motion.div}
          variants={popUp}
        >
          <Box>
            <img src="./img/Coffe.png" alt="icon" />
          </Box>
          <CountUp start={0} end={13765} duration={5.75} enableScrollSpy />+
          <Typography
            variant="subtitle2"
            fontFamily="Bad Script"
            fontWeight={400}
            color={"#000000"}
            fontSize={40}
          >
            подготвени јадења
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          pl={10}
          textAlign={"center"}
          component={motion.div}
          variants={popUp}
        >
          <Box>
            <img src="./img/hat 1.png" alt="icon" />
          </Box>
          <CountUp start={0} end={864} duration={5.75} enableScrollSpy />+
          <Typography
            variant="subtitle2"
            fontFamily="Bad Script"
            fontWeight={400}
            color={"#000000"}
            fontSize={40}
            marginBottom={2}
          >
            среќни готвачи
          </Typography>
        </Grid>
      </Grid>
      <Box component={motion.div} variants={inputButtonAnimate}>
        <hr color="#F1592A" />
      </Box>
    </Container>
  );
}
