import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { Box, Grid, ImageListItem, Paper, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import { motion } from "framer-motion";

type CustomersType = {
  id: string;
  img_one: string;
  comment: string;
  first_name: string;
  last_name: string;
  age: string;
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

export default function HappyCustomers() {
  const [data, setData] = useState<CustomersType[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/customers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Container
      component={motion.div}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 1 }}
    >
      <Grid container mt={12} mb={10}>
        {data.map((card) => {
          return (
            <Grid item xs={4} pl={10} textAlign={"center"} key={card.id}>
              <Paper
                elevation={2}
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "#FFF8F0",
                  minHeight: "50vh",
                  marginBottom: "100px",
                }}
                component={motion.div}
                variants={popUp}
              >
                <Box>
                  <Box pt={5} pb={5}>
                    <ImageList
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      component={motion.div}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <ImageListItem>
                        <img
                          src={card.img_one}
                          alt="img"
                          // loading="lazy"
                          className="circle-img "
                        />
                      </ImageListItem>
                    </ImageList>
                  </Box>

                  <Box ml={4} mr={4}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign={"justify"}
                    >
                      {card.comment}
                    </Typography>
                    <Typography variant="subtitle2" mt={4} pb={6}>
                      {card.first_name} {card.last_name}, {card.age} години
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
