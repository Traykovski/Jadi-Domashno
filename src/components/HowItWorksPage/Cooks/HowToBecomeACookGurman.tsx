import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";

export interface CookType {
  id: string;
  image: string;
  subTitle: string;
  text: string;
}

interface Props {
  data: CookType[];
}

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

export default function HowToBecomeACookGurman({ data }: Props) {
  // const [data, setData] = useState<CookType[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/how_to_become_cook")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <>
      {/* // component={motion.div}
      // initial={"offscreen"}
      // whileInView={"onscreen"}
      // viewport={{ once: false, amount: 1 }}
      // transition={{ staggerChildren: 0.5 }} */}

      <Box position={"relative"}>
        <Box
          className="hero-image6"
          // component={motion.div}
          // variants={backgroundImageAnimation}
          // initial={"offscreen"}
          // whileInView={"onscreen"}
         
        ></Box>
      </Box>

      <Grid container>
        {data.map((item) => {
          return (
            <
              // component={motion.div}
              // variants={popUp}
              // initial={"offscreen"}
              // whileInView={"onscreen"}
            >
              <Grid
                item
                xs={4}
                mb={10}
                key={item.id}
                component={motion.div}
                variants={popUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                // component={motion.div}
                // variants={popUp}
              >
                <Box
                  pl={10}
                  // component={motion.div}
                  // variants={backgroundImageAnimation}
                >
                  <motion.img
                    src={item.image}
                    alt="svg"
                    className="png"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={8}
                component={motion.div}
                variants={popUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                // component={motion.div}
                // variants={popUp}
              >
                <Typography variant="h6" mb={2}>
                  {item.subTitle}
                </Typography>
                <Typography variant="body2">{item.text}</Typography>
              </Grid>
            </>
          );
        })}
        <Box position={"relative"}>
          <Box
            className="hero-image8"
            // component={motion.div}
            // variants={backgroundImageAnimation}
            // initial={"offscreen"}
            // whileInView={"onscreen"}
            // viewport={{ once: false, amount: 1 }}
          ></Box>
        </Box>
        <Box position={"relative"}>
          <Box
            className="hero-image9"
            component={motion.div}
            variants={backgroundImageAnimation}
            // initial={"offscreen"}
            // whileInView={"onscreen"}
            // viewport={{ once: false, amount: 1 }}
          ></Box>
        </Box>
      </Grid>
    </>
  );
}
