import CardMenuPage from "./CardMenuPage";
import { Grid } from "@mui/material";
import { MenuInterface } from "../../../context/menuContext";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  menu: MenuInterface[];

  filteredMeal: MenuInterface[];
}

export default function Cards({ filteredMeal }: Props) {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        marginLeft: {
          xs: 0,
          md: 5,
        },
      }}
    >
      {filteredMeal.map((item) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            component={motion.div}
            layout
          >
            <AnimatePresence>
              <CardMenuPage data={item} />
            </AnimatePresence>
          </Grid>
        );
      })}
    </Grid>
  );
}
