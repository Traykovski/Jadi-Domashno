/* eslint-disable react/jsx-no-undef */
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Cooks from "./Cooks";
import Gurmans from "./Gurmans";
import { motion } from "framer-motion";

export default function HeroHowItWorks() {
  const [show, setShow] = useState(true);
  const [subType, setSubType] = React.useState("Готвачи");

  const cooks = () => {
    setSubType("Готвачи");
    setShow(!show);
  };
  const gurmans = () => {
    setSubType("Гурмани");
    setShow(!show);
  };

  const backgroundImageAnimation = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
    },
  };

  return (
    <Container>
      <Box
        textAlign={"center"}
        component={motion.div}
        initial={"offscreen"}
        // animate={"onscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 1 }}
        transition={{ staggerChildren: 1 }}
      >
        <Box
          mb={3}
          mt={14}
          component={motion.div}
          variants={backgroundImageAnimation}
        >
          <img src="./img/logo-jadi-domasno 1.png" alt="logo" />
        </Box>
        <Box mb={4} component={motion.div} variants={backgroundImageAnimation}>
          <Typography
            variant="h5"
            fontFamily={"Bad Script"}
            fontWeight={400}
            fontSize={50}
            className="line"
          >
            Како функционира?
          </Typography>
        </Box>
        <Box position={"relative"}>
          <Box
            className="hero-image3"
            component={motion.div}
            variants={backgroundImageAnimation}
          ></Box>
          <Box
            className="hero-image4"
            component={motion.div}
            variants={backgroundImageAnimation}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "70px",
          }}
        >
          <Box
            className="mask-box"
            component={motion.div}
            variants={backgroundImageAnimation}
          >
            <Box
              className="mask"
              style={{
                transform: `translateX(${subType === "Готвачи" ? 0 : "100px"})`,
              }}
            />
            <Button
              disableRipple
              variant="text"
              sx={{ color: subType === "Готвачи" ? "#ffffff" : "#ffffff" }}
              onClick={cooks}
            >
              Готвачи
            </Button>
            <Button
              disableRipple
              variant="text"
              sx={{ color: subType === "Гурмани" ? "#ffffff" : "#ffffff" }}
              onClick={gurmans}
            >
              Гурмани
            </Button>
          </Box>
        </Box>
      </Box>
      {show ? <Cooks /> : <Gurmans />}
    </Container>
  );
}
