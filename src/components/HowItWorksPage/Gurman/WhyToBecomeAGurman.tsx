import { Box, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

export interface DataType {
  id: string;
  image: string;
  subTitle: string;
  text: string;
}

interface Props {
  data: DataType[];
}

export default function WhyToBecomeAGurman({ data }: Props) {
  return (
    <Box>
      <Box mb={4} mt={9} textAlign={"center"}>
        <Typography
          variant="h5"
          fontFamily={"Bad Script"}
          fontWeight={400}
          fontSize={36}
          className="line"
        >
          Нашата мисија и визија
        </Typography>
      </Box>
      <Grid container mt={12} mb={10}>
        {data.map((card) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              textAlign={"center"}
              key={card.id}
              sx={{
                paddingLeft: {
                  xs: 0,
                  sm: "5rem",
                },
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  borderRadius: "5px",
                  border: "2px solid #F1592A",
                  width: "100%",
                  height: {
                    xs: "70%",
                    md: "30vh",
                  },
                  backgroundColor: "transparent",
                }}
                component={motion.div}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.img src={card.image} alt="img" className="image-why" />
              </Paper>
              <Box ml={4} mr={4} mt={4} mb={4}>
                <Typography
                  variant="h6"
                  fontFamily={"Bad Script"}
                  fontWeight={400}
                  fontSize={30}
                  textAlign={"center"}
                >
                  {card.subTitle}
                </Typography>
                <Typography variant="subtitle1" mt={2} pb={6}>
                  {card.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
