import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DataType } from "./WhyToBecomeACook";
import HowToBecomeACookGurman, { CookType } from "./HowToBecomeACookGurman";
import OurCooks from "../../OurCooks/OurCooks";
import AccordionCooksGurmans from "./AccordionCooksGurmans";
import WhyToBecomeAGurman from "../Gurman/WhyToBecomeAGurman";
import FAQ from "./FAQ";
import { motion } from "framer-motion";

export default function Gurmans() {
  const [data, setData] = useState<DataType[]>([]);
  const [gurmanData, setGurmanData] = useState<CookType[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8000/why_to_become_gurman")
    fetch("https://jadi-domashno-json.onrender.com/why_to_become_gurman")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    // fetch("http://localhost:8000/how_to_become_gurman")
    fetch("https://jadi-domashno-json.onrender.com/how_to_become_gurman")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGurmanData(data);
      });
  }, []);
  return (
    <>
      <Container>
        <Box>
          <Typography>
            Јади Домашно е платформа која ја спојува љубовта кон храната и
            готвењето на едно место! Тука може да најдете готвачи во близина на
            вашата локација и да нарачате вкусна, топла и домашна храна. Ние сме
            платформа која сака да ги потикне соседите да ја споделат љубовта
            кон храната и да дадеме можност на сите љубители на готвењето да ја
            покажат својата умешност и да ја споделат со нивната околина. Ако
            готвењето нешто што те прави среѓен и сакаш да си дел од нашата
            приказна, ние ти ја даваме сета слобода да се изразиш, но и да
            заработиш.
          </Typography>
        </Box>
        <WhyToBecomeAGurman data={data} />
        <Box mb={8} mt={5}>
          <Typography
            variant="h5"
            fontFamily={"Bad Script"}
            fontWeight={400}
            fontSize={30}
            className="line"
            textAlign={"center"}
          >
            Како да станете дел од Јади Домашно?
          </Typography>
        </Box>
        <HowToBecomeACookGurman data={gurmanData} />
        <OurCooks />

        <Box pl={6} mb={4}>
          <img src="./img/Group 13889.png" alt="tomato" />
        </Box>

        <Box textAlign={"center"}>
          <Typography
            fontFamily={"Bad Script"}
            fontWeight={400}
            fontSize={36}
            mb={6}
          >
            Ви благодариме и добредојдовте!
          </Typography>
          <Typography variant="body1" mb={6}>
            Ви посакуваме уживање во храната од нашите готвачи и споделување
            убави моменти во соседството!
          </Typography>
          <Stack>
            <Box mb={10}>
              <Button
                variant="contained"
                color="warning"
                // size="medium"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#FE724D",
                  marginTop: "10px",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  lineHeight: 2,
                  width: {
                    xs: "220px",
                    md: "220px",
                  },
                  textTransform: "capitalize",
                }}
                component={motion.div}
              >
                Регистрирај се
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box pl={6} mb={9} mt={3}>
          <img src="./img/Group 13889.png" alt="tomato" />
        </Box>
        <FAQ />
        <AccordionCooksGurmans />
      </Container>
    </>
  );
}
