import React from "react";
import Hero from "../../components/Hero/Hero";
import OurValues from "../../components/OurValues/OurValues";
import OurCooks from "../../components/OurCooks/OurCooks";
import Count from "../../components/CountUp/Count";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";
import Family from "../../components/Family/Family";
import Register from "../../components/Register/Register";
import { Container } from "@mui/material";




export default function HomePage() {
  return (
    <>
      <Hero />
      <Container>
        <OurValues />
        <OurCooks />
        <Count />
        <HappyCustomers />
        <Family />
        <Register />
      </Container>
    </>
  );
}
