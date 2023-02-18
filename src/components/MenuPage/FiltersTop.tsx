import { Box, Button } from "@mui/material";
import React, { useState } from "react";

import { MenuInterface } from "../../context/menuContext";
import { motion } from "framer-motion";

interface Props {
  menu: MenuInterface[];
  filteredMeal: MenuInterface[];
  handleSetMeal: (meal: string) => void;
}

export default function FiltersTop({ handleSetMeal }: Props) {
  const [selectedMealType] = useState<string>("");

  return (
    <Box className="slider-container">
      <Box className="center slider" mt={6} mb={3}>
        <Box className="center" >
          <Box
            mr={3}
            component={motion.div}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              disableRipple
              className={`filter-button ${
                selectedMealType === "чорби" ? "active" : ""
              }`}
              onClick={() => handleSetMeal("чорби")}
            >
              <img src="./img/FiltersTop/Group 225.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("салата")}>
              <img src="./img/FiltersTop/Group 226.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("веганска")}>
              <img src="./img/FiltersTop/Group 227.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("бургер")}>
              <img src="./img/FiltersTop/Group 228.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("оброк")}>
              <img src="./img/FiltersTop/Group 229.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("чорби")}>
              <img src="./img/FiltersTop/Group 13937.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button
              disableRipple
              onClick={() => handleSetMeal("домашни производи")}
            >
              <img src="./img/FiltersTop/Group 231.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("чорби")}>
              <img src="./img/FiltersTop/Group 225.png" alt="icon-png" />
            </Button>
          </Box>
          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("салата")}>
              <img src="./img/FiltersTop/Group 226.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("веганска")}>
              <img src="./img/FiltersTop/Group 227.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("бургер")}>
              <img src="./img/FiltersTop/Group 228.png" alt="icon-png" />
            </Button>
          </Box>

          <Box mr={3}>
            <Button disableRipple onClick={() => handleSetMeal("оброк")}>
              <img src="./img/FiltersTop/Group 229.png" alt="icon-png" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
