import React, { useContext } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";

import MediaCard from "./MediaCard";

import { Context } from "../../context/cooksContext";
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

export default function OurCooks() {
  const { cooks } = useContext(Context);

  return (
    <Container component={motion.div} variants={inputButtonAnimate}>
      <Box>
        <Typography
          variant="subtitle2"
          fontFamily="Bad Script"
          fontWeight={400}
          fontSize={40}
          className="line"
          marginTop={6}
          marginBottom={6}
          textAlign={"center"}
        >
          Запознајте ги нашите готвачи
        </Typography>
      </Box>

      <Grid container>
        {cooks.map((card) => {
          return (
            <Grid item xs={12} md={4} key={card.id}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mb={6}
              >
                <MediaCard card={card} />
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Box marginBottom={18} mt={8} textAlign={"center"}>
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#FE724D",
            marginTop: "10px",
            width: "220px",
            textTransform: "capitalize",
          }}
        >
          Кон готвачи
        </Button>
      </Box>
    </Container>
  );
}
