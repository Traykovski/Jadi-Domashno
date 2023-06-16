import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

type FamilyType = {
  image_one: string;
  title: string;
  image_two: string;
  text_one: string;
  text_two: string;
};

export default function Family() {
  const [data, setData] = useState<FamilyType>();

  useEffect(() => {
    // fetch("http://localhost:8000/family")
    fetch("https://jadi-domashno-json.onrender.com/family")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Container>
      <Grid container>
        <Box className="cooks-img5"></Box>
        <Box className="cooks-img6"></Box>
        <Box className="cooks-img7"></Box>
        <Grid
          item
          xs={4}
          md={4}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box pt={4} pl={13} width={"80%"}>
            <hr color="#F1592A" />
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box
            pl={6}
            sx={{
              paddingLeft: {
                xs: 11,
                md: 17,
              },
            }}
          >
            <img src="./img/домат 1.png" alt="tomato" />
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box pt={4} width={"80%"}>
            <hr color="#F1592A" />
          </Box>
        </Grid>
      </Grid>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={4}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Typography
          pr={1}
          fontWeight={400}
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "2rem",
            },
          }}
        >
          Стани дел од семејството
        </Typography>
        <Typography
          color={"#F1592A"}
          fontWeight={400}
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "2rem",
            },
          }}
        >
          Јади Домашно
        </Typography>
      </Box>
      <Grid container mt={8} color={"#FE724D"} fontWeight={600} fontSize={66}>
        <Grid
          item
          xs={6}
          pl={10}
          textAlign={"center"}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box>
            <motion.img
              src={data?.image_one}
              alt="icon"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />

            <Typography
              variant="subtitle2"
              fontWeight={400}
              color={"#000000"}
              fontSize={24}
            >
              {data?.text_one}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          pl={10}
          textAlign={"center"}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <motion.img
            src={data?.image_two}
            alt="icon"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color={"#000000"}
            fontSize={24}
          >
            {data?.text_two}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={5}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box pt={4} ml={13} width={"90%"}>
            <hr color="#F1592A" />
          </Box>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box pt={4}></Box>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Box pt={4} width={"90%"}>
            <hr color="#F1592A" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
