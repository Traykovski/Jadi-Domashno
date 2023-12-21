import * as React from "react";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

type FAQType = {
  title: string;
  subTitle_one: string;
  text_one: string;
  subTitle_two: string;
  text_two: string;
  subTitle_three: string;
  text_three: string;
  subTitle_four: string;
  text_four: string;
  subTitle_five: string;
  text_five: string;
};

export default function AccordionCooksGurmans() {
  const [data, setData] = useState<FAQType>();

  useEffect(() => {
    // fetch("http://localhost:8000/faq")
    fetch("https://jadi-domashno.onrender.com/faq")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Box mb={1}>
        <Box>
          <Accordion
            sx={{
              backgroundColor: "#FFF8F0",
              border: "1px solid #f1592a",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography fontWeight={"bold"}>{data?.subTitle_one}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data?.text_one}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Accordion
            sx={{
              backgroundColor: "#FFF8F0",
              border: "1px solid #f1592a",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              id="panel2-header"
              aria-controls="panel2-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography fontWeight={"bold"}>{data?.subTitle_two}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data?.text_two}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Accordion
            sx={{
              backgroundColor: "#FFF8F0",
              border: "1px solid #f1592a",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              id="panel3-header"
              aria-controls="panel3-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography fontWeight={"bold"}>
                {data?.subTitle_three}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data?.text_three}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box>
          <Accordion
            sx={{
              backgroundColor: "#FFF8F0",
              border: "1px solid #f1592a",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              id="panel4-header"
              aria-controls="panel4-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography fontWeight={"bold"}>{data?.subTitle_four}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data?.text_four}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Accordion
            sx={{
              backgroundColor: "#FFF8F0",
              border: "1px solid #f1592a",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              id="panel5-header"
              aria-controls="panel5-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography fontWeight={"bold"}>{data?.subTitle_five}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data?.text_five}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      {/*TODO: IMPORTANT: The code below must stay like this because there is a bug and it can be resolved only like this! */}
      <Box
        sx={{
          backgroundColor: "#FFF8F0",
          border: "1px solid #FFF8F0",
          borderRadius: "10px",
        }}
      >
        <Accordion
          sx={{
            backgroundColor: "#FFF8F0",
            border: "1px solid #FFF8F0",
            borderRadius: "10px",
            boxShadow: "none",
            position: "unset",
          }}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#FFF8F0",
            border: "1px solid #FFF8F0",
            borderRadius: "10px",
            boxShadow: "none",
            position: "unset",
          }}
        >
          <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
            <Typography></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#FFF8F0",
            border: "1px solid #FFF8F0",
            borderRadius: "10px",
            boxShadow: "none",
            position: "unset",
          }}
        >
          <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
            <Typography></Typography>
          </AccordionSummary>
        </Accordion>
      </Box>
    </>
  );
}
