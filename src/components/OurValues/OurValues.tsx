import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

type ValuesType = {
  id: string;
  img_one: string;
  subTitle: string;
  text: string;
};

const blockAnimate = {
  offscreen: { opacity: 0, scale: 0.5 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const backgroundImageAnimation = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
  },
};

export default function OurValues() {
  const [data, setData] = useState<ValuesType[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/our_values")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  // console.log(data);
  return (
    <>
      <Container
        component={motion.div}
        initial={"offscreen"}
        // animate={"onscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 1 }}
        transition={{ staggerChildren: 1 }}
      >
        <Box component={motion.div} variants={blockAnimate}>
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
              Нашите вредности
            </Typography>
          </Box>

          <Grid container ml={7}>
            {data.map((card) => {
              return (
                <Grid item xs={4} key={card.id}>
                  <Box>
                    <ImageList
                      component={motion.div}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <ImageListItem className="circle">
                        <motion.img
                          src={card.img_one}
                          alt="img"
                          className="circle-img"
                        />
                      </ImageListItem>
                    </ImageList>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontFamily="Bad Script"
                        fontWeight={400}
                        fontSize={30}
                        paddingLeft={5}
                      >
                        {card.subTitle}
                      </Typography>
                      <Typography variant="subtitle2" marginBottom={6}>
                        {card.text}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Stack>
            <Box marginBottom={18} textAlign={"center"}>
              <Button
                variant="contained"
                color="warning"
                size="large"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#FE724D",
                  marginTop: "10px",

                  textTransform: "capitalize",
                }}
                component={motion.div}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Дознај повеќе за нас
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box
          className="cooks-img1"
          component={motion.div}
          variants={backgroundImageAnimation}
        ></Box>
        <Box
          className="cooks-img2"
          component={motion.div}
          variants={backgroundImageAnimation}
        ></Box>
      </Container>
    </>
  );
}
