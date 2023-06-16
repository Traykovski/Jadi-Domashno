/* eslint-disable react/jsx-no-undef */
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Cooks from "./Cooks";
import Gurmans from "./Gurmans";

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

  return (
    <Container>
      <Box>
        <Box mb={3} mt={14} display={"flex"} justifyContent={"center"}>
          <img src="./img/logo-jadi-domasno 1.png" alt="logo" />
        </Box>
        <Box mb={4} textAlign={"center"}>
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
          <Box className="hero-image3"></Box>
          <Box className="hero-image4"></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "70px",
          }}
        >
          <Box className="mask-box">
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
