import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import WhyToBecomeACook, { DataType } from "./WhyToBecomeACook";
import HappyCustomers from "../../HappyCustomers/HappyCustomers";
import CooksCriteria from "./CooksCriteria";
import HowToBecomeACookGurman, { CookType } from "./HowToBecomeACookGurman";
import ThankUAndWelcome from "./ThankUAndWelcome";
import FAQ from "./FAQ";
import AccordionCooksGurmans from "./AccordionCooksGurmans";

export default function Cooks() {
  const [data, setData] = useState<DataType[]>([]);
  const [cooksData, setCooksData] = useState<CookType[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8000/how_to_become_cook")
    fetch("https://jadi-domashno.onrender.com/how_to_become_cook")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCooksData(data);
      });
  }, []);

  useEffect(() => {
    // fetch("http://localhost:8000/why_to_become_a_cook")
    fetch("https://jadi-domashno.onrender.com/why_to_become_a_cook")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Container>
        <Box>
          <Typography>
            Јади Домашно поврзува талентирани готвачи со локални клиенти. Ние
            веруваме во обезбедувањето на шефовите во нашата заедница - поединци
            кои отсекогаш сонувале да градат сопствен бизнис со храна - можност
            да заработат значаен приход правејќи го она што го сакаат! Ние, исто
            така, веруваме дека секој човек треба да има пристап до здрав
            домашен оброк по прифатлива цена. Градење заедница посветена на
            економско зајакнување и култура на инклузивност - затоа го
            започнавме Јади Домашно.
          </Typography>
        </Box>
        <WhyToBecomeACook data={data} />
        <CooksCriteria />
        <Box mb={8} mt={5}>
          <Typography
            variant="h5"
            fontFamily={"Bad Script"}
            fontWeight={400}
            fontSize={36}
            className="line"
            textAlign={"center"}
          >
            Како да станете готвач на јади домашно?
          </Typography>
        </Box>

        <HowToBecomeACookGurman data={cooksData} />

        <HappyCustomers />
        <ThankUAndWelcome />
        <FAQ />
        <AccordionCooksGurmans />
      </Container>
      <Box position={"relative"}>
        <Box className="hero-image11"></Box>
      </Box>
    </>
  );
}
