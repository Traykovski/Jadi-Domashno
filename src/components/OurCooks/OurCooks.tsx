import React, { useContext } from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";

import MediaCard from "./MediaCard";

import { Context } from "../../context/cooksContext";
import { motion } from "framer-motion";

const backgroundImageAnimation = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
  },
};

export default function OurCooks() {
  const { cooks } = useContext(Context);

 

  return (
    <Container
      component={motion.div}
      variants={backgroundImageAnimation}
      initial={"offscreen"}
      // animate={"onscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
    >
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
            <Grid item xs={4} key={card.id}>
              <Box mr={4} component={motion.div}>
                <MediaCard card={card} />
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Stack>
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
            component={motion.div}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Кон готвачи
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
