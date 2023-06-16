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

export default function HappyCustomers() {
  const [data, setData] = useState<CustomersType[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8000/customers")
    fetch("https://jadi-domashno-json.onrender.com/customers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Container>
      <Grid container spacing={4} mt={12} mb={10}>
        {data.map((card) => {
          return (
            <Grid
              item
              xs={12}
              md={4}
              textAlign={"center"}
              key={card.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Paper
                sx={{
                  borderRadius: "25px",
                  backgroundColor: "#FFF8F0",
                  width: {
                    xs: "100%",
                    sm: "50%",
                    md: "100%",
                  },
                  marginBottom: "100px",
                  height: "80%",
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
                <Box>
                  <Box pt={5} pb={5}>
                    <ImageList
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ImageListItem>
                        <img
                          src={card.img_one}
                          alt="img"
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
