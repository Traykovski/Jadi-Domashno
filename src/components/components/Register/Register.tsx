import React, { useEffect, useState } from "react";
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

export default function Register() {
  const [data, setData] = useState<RegisterType[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8000/register")
    fetch("https://jadi-domashno-json.onrender.com/register")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Grid container mt={4} mb={8} ml={12}>
      {data.map((block) => {
        return (
          <Grid
            item
            xs={6}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              pb={4}
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
              justifyContent={"flex-start"}
              pb={4}
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

              <Typography fontWeight={400} fontSize={16} pl={1}>
                {block.text_two}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              pb={4}
            >
              <motion.img
                src={block.image_three}
                alt="icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <Typography
                fontWeight={400}
                fontSize={16}
                sx={{
                  pl: {
                    xs: 0,
                    sm: 3,
                  },
                }}
              >
                {block.text_three}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <motion.img
                src={block.image_four}
                alt="icon"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <Typography
                fontWeight={400}
                fontSize={16}
                sx={{
                  pl: {
                    xs: 0,
                    sm: 4,
                  },
                }}
              >
                {block.text_four}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                color="warning"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#FE724D",
                  marginTop: "30px",
                  textTransform: "capitalize",
                  textAlign: "center",
                  width: "180px",
                }}
              >
                {block.button_title}
              </Button>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
