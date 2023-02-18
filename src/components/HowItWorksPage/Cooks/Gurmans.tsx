import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DataType } from "./WhyToBecomeACook";
import HowToBecomeACookGurman, { CookType } from "./HowToBecomeACookGurman";
import OurCooks from "../../OurCooks/OurCooks";
import AccordionCooksGurmans from "./AccordionCooksGurmans";
import WhyToBecomeAGurman from "../Gurman/WhyToBecomeAGurman";
import FAQ from "./FAQ";
import { motion } from "framer-motion";

const inputButtonAnimate = {
  offscreen: { x: -900, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 2, type: "spring" },
  },
};

export default function Gurmans() {
  const [data, setData] = useState<DataType[]>([]);
  const [gurmanData, setGurmanData] = useState<CookType[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/why_to_become_gurman")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/how_to_become_gurman")
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
        <Box
          component={motion.div}
          variants={inputButtonAnimate}
          initial={"offscreen"}
          whileInView={"onscreen"}
        >
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
        <Box
          mb={8}
          mt={5}
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
            textAlign={"center"}
          >
            Како да станете дел од Јади Домашно?
          </Typography>
        </Box>
        <HowToBecomeACookGurman data={gurmanData} />
        <OurCooks />

        <Box
          pl={6}
          mb={4}
          component={motion.div}
          variants={inputButtonAnimate}
          initial={"offscreen"}
          whileInView={"onscreen"}
        >
          <img src="./img/Group 13889.png" alt="tomato" />
        </Box>

        <Box
          textAlign={"center"}
          component={motion.div}
          variants={inputButtonAnimate}
          initial={"offscreen"}
          whileInView={"onscreen"}
        >
          <Typography
            fontFamily={"Bad Script"}
            fontWeight={400}
            fontSize={30}
            mb={6}
          >
            Ви благодариме и добредојдовте!
          </Typography>
          <Typography variant="body1" mb={6}>
            Ви посакуваме уживање во храната од нашите готвачи и споделување
            убави моменти во соседството!
          </Typography>
          <Stack>
            <Box marginRight={8} textAlign={"center"} mb={10}>
              <Button
                variant="contained"
                color="warning"
                size="medium"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#FE724D",
                  marginTop: "10px",
                  width: "10vw",
                  textTransform: "capitalize",
                }}
                component={motion.div}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Регистрирај се
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box
          pl={6}
          mb={9}
          mt={3}
          component={motion.div}
          variants={inputButtonAnimate}
          initial={"offscreen"}
          whileInView={"onscreen"}
        >
          <img src="./img/Group 13889.png" alt="tomato" />
        </Box>
        <FAQ />
        <AccordionCooksGurmans />
      </Container>
      <Box position={"relative"}>
        <Box
          className="hero-image11"
          component={motion.div}
          variants={inputButtonAnimate}
          initial={"offscreen"}
          whileInView={"onscreen"}
        ></Box>
      </Box>
    </>
  );
}
