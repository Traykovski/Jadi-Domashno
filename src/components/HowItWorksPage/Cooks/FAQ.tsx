import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const inputButtonAnimate = {
  offscreen: { x: -900, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 7, type: "spring" },
  },
};

export default function FAQ() {
  return (
    <>
      <Box
        mb={8}
        mt={15}
        textAlign={"center"}
        component={motion.div}
        variants={inputButtonAnimate}
        initial={"offscreen"}
        whileInView={"onscreen"}
      >
        <Typography
          variant="h5"
          fontFamily={"Bad Script"}
          fontWeight={400}
          fontSize={30}
          className="line"
        >
          Најчесто поставувани прашања
        </Typography>
      </Box>
    </>
  );
}
