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

const inputButtonAnimate = {
  offscreen: { x: -900, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 7, type: "spring" },
  },
};
const popUp = {
  offscreen: { opacity: 0, scale: 0.5 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      default: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

export default function WhyToBecomeAGurman({ data }: Props) {
  return (
    <Box
      component={motion.div}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 1 }}
    >
      <Box
        mb={4}
        mt={9}
        textAlign={"center"}
        component={motion.div}
        variants={inputButtonAnimate}
      >
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
            <Grid item xs={4} pl={10} textAlign={"center"} key={card.id}>
              <Paper
                elevation={1}
                sx={{ borderRadius: "5px", border: "2px solid #F1592A" }}
                component={motion.div}
                variants={popUp}
              >
                <motion.img
                  src={card.image}
                  alt="img"
                  className="image-why"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
              </Paper>
              <Box ml={4} mr={4} mt={2} component={motion.div} variants={popUp}>
                <Typography
                  variant="h6"
                  fontFamily={"Bad Script"}
                  fontWeight={400}
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
