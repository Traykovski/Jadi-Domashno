import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type ThankUType = {
  title: string;
  text_cooks: string;
  text_gurmans: string;
  button_title: string;
};

const inputButtonAnimate = {
  offscreen: { x: -900, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 7, type: "spring" },
  },
};

export default function ThankUAndWelcome() {
  const [data, setData] = useState<ThankUType>();

  useEffect(() => {
    fetch("http://localhost:8000/thank_u_and_welcome")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Box
      component={motion.div}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 1 }}
    >
      <Box pl={6} mb={4} component={motion.div} variants={inputButtonAnimate}>
        <img src="./img/Group 13889.png" alt="tomato" />
      </Box>

      <Box
        textAlign={"center"}
        mb={4}
        component={motion.div}
        variants={inputButtonAnimate}
      >
        <Typography
          fontFamily={"Bad Script"}
          fontWeight={400}
          fontSize={30}
          mb={6}
        >
          {data?.title}
        </Typography>
        <Typography variant="body1" mb={6}>
          {data?.text_cooks}
        </Typography>
        <Stack>
          <Box marginRight={8} textAlign={"center"} mb={10}>
            <Button
              variant="contained"
              color="warning"
              size="medium"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#FE724D",
                marginTop: "10px",
                width: "10vw",
                textTransform: "capitalize",
              }}
              component={motion.div}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {data?.button_title}
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box pl={6} component={motion.div} variants={inputButtonAnimate}>
        <img src="./img/Group 13889.png" alt="tomato" />
      </Box>
    </Box>
  );
}
