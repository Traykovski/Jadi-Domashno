

import CardMenuPage from "./CardMenuPage";
import { Grid } from "@mui/material";
import { MenuInterface } from "../../context/menuContext";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  menu: MenuInterface[];
  
  filteredMeal: MenuInterface[];
 
 
}

export default function Cards({ filteredMeal }: Props) {
 

  return (
    <Grid container ml={12} rowSpacing={8} columnSpacing={-32}>
      {filteredMeal.map((item) => {
        return (
          <Grid item xs={4} key={item.id} component={motion.div} layout>
            <AnimatePresence>
              <CardMenuPage data={item} />
            </AnimatePresence>
          </Grid>
        );
      })}
    </Grid>
  );
}
