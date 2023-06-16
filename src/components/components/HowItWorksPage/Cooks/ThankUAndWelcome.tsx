import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

type ThankUType = {
  title: string;
  text_cooks: string;
  text_gurmans: string;
  button_title: string;
};

export default function ThankUAndWelcome() {
  const [data, setData] = useState<ThankUType>();

  useEffect(() => {
    // fetch("http://localhost:8000/thank_u_and_welcome")
    fetch("https://jadi-domashno-json.onrender.com/thank_u_and_welcome")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Box>
      <Box pl={6} mb={4}>
        <img src="./img/Group 13889.png" alt="tomato" />
      </Box>

      <Box textAlign={"center"} mb={4}>
        <Typography
          fontFamily={"Bad Script"}
          fontWeight={400}
          fontSize={36}
          mb={6}
        >
          {data?.title}
        </Typography>
        <Typography variant="body1" mb={6}>
          {data?.text_cooks}
        </Typography>
        <Stack>
          <Box mb={10}>
            <Button
              variant="contained"
              color="warning"
              size="medium"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#FE724D",
                marginTop: "10px",
                textTransform: "capitalize",
              }}
            >
              {data?.button_title}
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box pl={6}>
        <img src="./img/Group 13889.png" alt="tomato" />
      </Box>
    </Box>
  );
}
