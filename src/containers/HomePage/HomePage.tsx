import React from "react";
import Hero from "../../components/Hero/Hero";
import OurValues from "../../components/OurValues/OurValues";
import OurCooks from "../../components/OurCooks/OurCooks";
import Count from "../../components/CountUp/Count";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";
import Family from "../../components/Family/Family";
import Register from "../../components/Register/Register";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <Box
      component={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Hero />
      <OurValues />
      <OurCooks />
      <Count />
      <HappyCustomers />
      <Family />
      <Register />
    </Box>
  );
}
