import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type CriteriaType = {
  id: string;
  image: string;
  text: string;
};

const backgroundImageAnimation = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
  },
};
const popUp = {
  offscreen: { opacity: 0, scale: 0.5 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

export default function CooksCriteria() {
  const [data, setData] = useState<CriteriaType[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/cooks-criteria")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Box>
      <Box position={"relative"}>
        <Box
          className="hero-image5"
          component={motion.div}
          variants={backgroundImageAnimation}
          initial={"offscreen"}
          whileInView={"onscreen"}
        ></Box>
      </Box>

      <Box
        mb={8}
        mt={5}
        textAlign={"center"}
        component={motion.div}
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={popUp}
        viewport={{ once: false, amount: 1 }}
      >
        <Typography
          variant="h5"
          fontFamily={"Bad Script"}
          fontWeight={400}
          fontSize={30}
          className="line"
        >
          Кои критериуми треба да ги исполни еден готвач?
        </Typography>
      </Box>
      <Grid container mt={12} mb={10}>
        {data.map((card) => {
          return (
            <Grid
              item
              xs={6}
              pl={10}
              mb={16}
              key={card.id}
              component={motion.div}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 1 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Box position={"relative"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  component={motion.div}
                  variants={popUp}
                >
                  <motion.img
                    src={card.image}
                    alt="img"
                    // loading="lazy"
                    className="img"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />

                  <Typography variant="body2" fontWeight={400} pl={2}>
                    {card.text}
                  </Typography>
                </Box>
                <Box className="badge" component={motion.div} variants={popUp}>
                  {card.id}{" "}
                </Box>
              </Box>
            </Grid>
          );
        })}

        <Box position={"relative"}>
          <Box
            className="hero-image7"
            component={motion.div}
            variants={backgroundImageAnimation}
            initial={"offscreen"}
            whileInView={"onscreen"}
          ></Box>
        </Box>
      </Grid>
    </Box>
  );
}
