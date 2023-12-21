import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  ImageListItem,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

type ValuesType = {
  id: string;
  img_one: string;
  subTitle: string;
  text: string;
};

export default function OurValues() {
  const [data, setData] = useState<ValuesType[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8000/our_values")
    fetch("https://jadi-domashno.onrender.com/our_values")
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

          <Grid container>
            {data.map((card) => {
              return (
                <Grid item xs={12} md={4} key={card.id}>
                  <Box
                    flexShrink={0}
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

                    <Box
                      textAlign={"center"}
                      sx={{
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        fontFamily="Bad Script"
                        fontWeight={400}
                        textAlign={"center"}
                        sx={{
                          fontSize: {
                            xs: "2rem",
                            sm: "1.5rem",
                            md: "2rem",
                          },
                        }}
                      >
                        {card.subTitle}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        marginBottom={6}
                        textAlign={"center"}
                      >
                        {card.text}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Box
            sx={{
              marginBottom: {
                xs: "4rem",
                md: "8rem",
              },
            }}
            textAlign={"center"}
          >
            <Button
              variant="contained"
              color="warning"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#FE724D",
                marginTop: "10px",

                textTransform: "capitalize",
              }}
            >
              Дознај повеќе за нас
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
