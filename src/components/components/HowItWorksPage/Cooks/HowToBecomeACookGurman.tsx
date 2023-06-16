import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";


export interface CookType {
  id: string;
  image: string;
  subTitle: string;
  text: string;
}

interface Props {
  data: CookType[];
}

export default function HowToBecomeACookGurman({ data }: Props) {
  return (
    <>
      <Grid container>
        {data.map((item) => {
          return (
            <>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  marginBottom: {
                    xs: "0",
                    sm: "6rem",
                  },
                }}
                key={item.id}
              >
                <Box
                  sx={{
                    textAlign: {
                      xs: "center",
                    },
                    marginY: {
                      xs: "2rem",
                      sm: "0rem",
                    },
                  }}
                >
                  <motion.img
                    src={item.image}
                    alt="svg"
                    className="png"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={8}
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "justify",
                  },
                }}
              >
                <Typography variant="h6" mb={2}>
                  {item.subTitle}
                </Typography>
                <Typography variant="body2">{item.text}</Typography>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
