import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type CriteriaType = {
  id: string;
  image: string;
  text: string;
};

export default function CooksCriteria() {
  const [data, setData] = useState<CriteriaType[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8000/cooks-criteria")
    fetch("https://jadi-domashno.onrender.com/cooks-criteria")
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
        <Box className="hero-image5"></Box>
      </Box>

      <Box mb={8} mt={5} textAlign={"center"}>
        <Typography
          variant="h5"
          fontFamily={"Bad Script"}
          fontWeight={400}
          fontSize={36}
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
              xs={12}
              sm={6}
              sx={{
                paddingLeft: {
                  xs: "0rem",
                  sm: "1rem",
                },
              }}
              mb={16}
              key={card.id}
            >
              <Box position={"relative"} sx={{}}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
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
                <Box>{/* {card.id}{" "} */}</Box>
              </Box>
            </Grid>
          );
        })}

        <Box position={"relative"}>
          <Box className="hero-image7"></Box>
        </Box>
      </Grid>
    </Box>
  );
}
