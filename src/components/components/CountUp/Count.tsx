import React from "react";
import CountUp, { useCountUp } from "react-countup";
import { Container } from "@mui/system";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Count() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 2000,
  });
  return (
    <Container>
      <Box className="cooks-img3"></Box>
      <Box className="cooks-img4"></Box>
      <Box>
        <hr color="#F1592A" />
      </Box>
      <Grid
        container
        mt={4}
        mb={2}
        color={"#FE724D"}
        fontWeight={600}
        fontSize={66}
      >
        <Grid item xs={12} md={4} textAlign={"center"}>
          <Box>
            <Box>
              <img src="./img/Heart.png" alt="icon" />
            </Box>
            <CountUp
              start={0}
              end={10900}
              duration={10}
              enableScrollSpy={true}
            />
            +
            <Typography
              variant="subtitle2"
              fontFamily="Bad Script"
              fontWeight={400}
              color={"#000000"}
              fontSize={40}
            >
              задоволни клиенти
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"center"}>
          <Box>
            <img src="./img/Coffe.png" alt="icon" />
          </Box>
          <CountUp start={0} end={13765} duration={10} enableScrollSpy={true} />
          +
          <Typography
            variant="subtitle2"
            fontFamily="Bad Script"
            fontWeight={400}
            color={"#000000"}
            fontSize={40}
          >
            подготвени јадења
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"center"}>
          <Box>
            <img src="./img/hat 1.png" alt="icon" />
          </Box>
          <CountUp start={0} end={864} duration={10} enableScrollSpy={true} />+
          <Typography
            variant="subtitle2"
            fontFamily="Bad Script"
            fontWeight={400}
            color={"#000000"}
            fontSize={40}
            marginBottom={2}
          >
            среќни готвачи
          </Typography>
        </Grid>
      </Grid>
      <Box
     
      >
        <hr color="#F1592A" />
      </Box>
    </Container>
  );
}
