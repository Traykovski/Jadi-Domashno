import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CooksInterface } from "../../../context/cooksContext";
import { motion } from "framer-motion";

interface Props {
  card: CooksInterface;
}

export default function MediaCard({ card }: Props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          height: 360,
          borderRadius: "15px",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", /* IE and Edge */
          "scrollbar-width": "none", /* Firefox */
        }}
       
        
        component={motion.div}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <CardMedia sx={{ height: 230 }} image={card.image} title="cook" />
        <Box
          sx={{
            marginLeft: "300px",
            marginTop: "-245px",
            position: "absolute",
            color: "#EF7204",
          }}
        >
          <VerifiedIcon fontSize="large" />
        </Box>

        <CardContent sx={{ backgroundColor: "#FFF2E2" }} className="rounded">
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom variant="body2" component="div">
                {card.first_name} {card.last_name}
              </Typography>
              <Typography variant="body2" color="#EF7204">
                {card.food_type_one} <br /> {card.food_type_two} <br />{" "}
                {card.food_type_three}
              </Typography>
            </Grid>
            <Grid item xs={6} bgcolor={"#FFF2E2"} pl={4}>
              <Box mt={1} className="rounded">
                <Stack spacing={1} ml={2}>
                  <Rating
                    name="half-rating"
                    size="small"
                    sx={{ color: "#F1592A" }}
                    defaultValue={card.stars}
                    precision={0.5}
                    readOnly
                  />
                </Stack>

                <Box>
                  <Typography variant="body2" mt={1} ml={4}>
                    <img src={card.icon} alt="home-png" /> 300 м
                  </Typography>
                </Box>
              </Box>
              <CardActions sx={{ width: "100%" }}>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    height: "25px",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    fontWeight: "500",
                    fontSize: "11px",
                    color: "#000000",
                    borderColor: "#EF7204",
                    ":hover": {
                      color: "#EF7200",
                      borderColor: "#EF7200",
                    },
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {card.button_title_one}
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
