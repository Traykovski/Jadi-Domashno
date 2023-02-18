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

export default function WhyToBecomeACook({ data }: Props) {
  return (
    <Box
      component={motion.div}
      initial={"offscreen"}
      // animate={"onscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 1 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <Box mb={8} mt={5} textAlign={"center"}>
        <Typography
          variant="h5"
          fontFamily={"Bad Script"}
          fontWeight={400}
          fontSize={36}
          className="line"
          component={motion.div}
          variants={popUp}
        >
          Зошто да станете готвач на Јади домашно?
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
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  // loading="lazy"
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
