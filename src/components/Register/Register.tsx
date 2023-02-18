import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { Grid, Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

type RegisterType = {
  id: string;
  image_one: string;
  text_one: string;
  image_two: string;
  text_two: string;
  image_three: string;
  text_three: string;
  image_four: string;
  text_four: string;
  button_title: string;
};

const backgroundImageAnimation = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
  },
};

export default function Register() {
  const [data, setData] = useState<RegisterType[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/register")
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
      // animate={"onscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <Grid container mt={4} mb={8}>
        {data.map((block) => {
          return (
            <Grid item xs={6}>
              <Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  pb={4}
                  component={motion.div}
                  variants={backgroundImageAnimation}
                >
                  <motion.img
                    src={block.image_one}
                    alt="icon"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                  <Typography fontWeight={400} fontSize={16} pl={3}>
                    {block.text_one}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  pb={4}
                  pl={9}
                  
                  component={motion.div}
                  variants={backgroundImageAnimation}
                >
                  <motion.img
                    src={block.image_two}
                    alt="icon"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                  />

                  <Typography fontWeight={400} fontSize={16} pl={2} width={"82%"}>
                    {block.text_two}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  pb={4}
                  pl={3}
                  component={motion.div}
                  variants={backgroundImageAnimation}
                >
                  <motion.img
                    src={block.image_three}
                    alt="icon"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                  <Typography fontWeight={400} fontSize={16} pl={3}>
                    {block.text_three}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  pl={9}
                  component={motion.div}
                  variants={backgroundImageAnimation}
                >
                  <motion.img
                    src={block.image_four}
                    alt="icon"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                  <Typography fontWeight={400} fontSize={16} pl={5}>
                    {block.text_four}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                  component={motion.div}
                  variants={backgroundImageAnimation}
                >
                  <Button
                    variant="contained"
                    color="warning"
                    // size="large"
                    sx={{
                      borderRadius: "20px",
                      backgroundColor: "#FE724D",
                      marginTop: "30px",
                      textTransform: "capitalize",
                      textAlign: "center",
                      width: "180px",
                    }}
                    component={motion.div}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {block.button_title}
                  </Button>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
