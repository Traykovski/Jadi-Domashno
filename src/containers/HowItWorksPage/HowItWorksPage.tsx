import React from "react";
import HeroHowItWorks from "../../components/HowItWorksPage/Cooks/HeroHowItWorks";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export default function HowItWorksPage() {
  return (
    <Box
      // component={motion.div}
      // initial={{ width: 0 }}
      // animate={{ width: "100%" }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <HeroHowItWorks />
    </Box>
  );
}
