import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Calendar from "../../components/MenuPage/Calendar";
import FiltersTop from "../../components/MenuPage/FiltersTop";
import { Context as MenuContext } from "../../context/menuContext";
import Cards from "../../components/MenuPage/Cards";
import FiltersLeft from "../../components/MenuPage/FiltersLeft";
import { MenuInterface } from "../../context/menuContext";
import { motion } from "framer-motion";

const inputButtonAnimate = {
  offscreen: { x: -900, opacity: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 2, type: "spring" },
  },
};

export default function MenuPage() {
  const { menu } = useContext(MenuContext);

  // filters top (choose type of meal)
  const [meal, setMeal] = useState<MenuInterface[]>(menu);
  const [filteredMeal, setFilteredMeal] = useState<MenuInterface[]>(menu);

  // filter by price
  const [val, setVal] = useState([0, 1000]);

  // checkbox filters 3 (delivery)
  const [delivery, setDelivery] = useState<string>("");

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedAvailable, setSelectedAvailable] = useState<string>("");

  useEffect(
    () => {
      if (meal) {
        setFilteredMeal(menu);
        setMeal(menu);
      } else {
        setFilteredMeal(menu.filter((n) => n.name === meal));
        // setMeal(menu)

        console.log(`meal ${filteredMeal}`);
      }

      // filter by available
      filterAvailable();

      // filter by price - slider
      if (val) {
        setFilteredMeal(
          menu.filter((n) => n.price >= val[0] && n.price <= val[1])
        );
      }

      // //  filters by (rating)
      if (selectedValue === "3") {
        setFilteredMeal(menu.filter((e) => e.reviews === 3));

        // console.log(filteredMeal);
      }

      if (selectedValue === "4") {
        setFilteredMeal(menu.filter((e) => e.reviews === 4));

        // console.log(filteredMeal);
      }
      if (selectedValue === "5") {
        setFilteredMeal(menu.filter((e) => e.reviews === 5));

        // console.log(filteredMeal);
      }

      // filters by delivery
      if (delivery === "yes") {
        setFilteredMeal(menu.filter((e) => e.delivery === "yes"));

        console.log(filteredMeal);
      }
      if (delivery === "no") {
        setFilteredMeal(menu.filter((e) => e.delivery === "no"));
      }
    },
    // eslint-disable-next-line
    [
      menu,

      // selectedAvailable,
      val,
      selectedValue,
      delivery,
      meal,
    ]
  );

  // filters by type of meal
  const handleSetMeal = (meal: string): void => {
    setFilteredMeal(menu.filter((n) => n.meal === meal));
  };

  // filters by available
  const handleChangeAvailable = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedAvailable(event.target.value);

    filterAvailable();

    console.log(selectedAvailable);
  };

  const filterAvailable = () => {
    if (selectedAvailable === "веднаш") {
      setFilteredMeal(menu.filter((e) => e.available === "веднаш"));

      console.log(filteredMeal);
    }
    if (selectedAvailable === "утре") {
      setFilteredMeal(menu.filter((e) => e.available === "утре"));

      console.log(filteredMeal);
    }
    if (selectedAvailable === "по порачка") {
      setFilteredMeal(menu.filter((e) => e.available === "по порачка"));

      console.log(filteredMeal);
    }
  };

  // filter by price
  const updateRange = (e: any, data: any) => {
    setVal(data);
    console.log(val);
  };

  // filters by alergeni
  const [isActive, setIsActive] = useState(false);

  const handleSetAlergeni = (alergeni: string): void => {
    setFilteredMeal(menu.filter((n) => n.alergeni === alergeni));
    setIsActive(!isActive);
  };

  // filters by stars
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);

    console.log(selectedAvailable);
  };

  // filters by delivery
  const handleChangeDelivery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDelivery(event.target.value);
    console.log(delivery);
  };
  return (
    <Box
      component={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <Box
        component={motion.div}
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 1 }}
      >
        <Box
          ml={4}
          mr={4}
          mt={14}
          component={motion.div}
          variants={inputButtonAnimate}
        >
          <Box mb={8} pt={8} textAlign={"center"}>
            <Typography
              variant="h5"
              fontFamily={"Bad Script"}
              fontWeight={400}
              fontSize={30}
              className="line"
            >
              Мени
            </Typography>
          </Box>
          {/* Calendar */}
          <Calendar />
          {/* Filters top*/}
          <FiltersTop
            menu={menu}
            filteredMeal={filteredMeal}
            handleSetMeal={handleSetMeal}
          />
        </Box>

        <Grid container mt={3} ml={3}>
          <Grid
            item
            xs={2}
            component={motion.div}
            variants={inputButtonAnimate}
          >
            <FiltersLeft
              menu={menu}
              handleSetMeal={handleSetMeal}
              handleSetAlergeni={handleSetAlergeni}
              isActive={isActive}
              handleChange={handleChange}
              selectedValue={selectedValue}
              delivery={delivery}
              handleChangeDelivery={handleChangeDelivery}
              val={val}
              updateRange={updateRange}
              selectedAvailable={selectedAvailable}
              handleChangeAvailable={handleChangeAvailable}
              setSelectedAvailable={setSelectedAvailable}
            />
          </Grid>

          <Grid
            item
            xs={10}
            component={motion.div}
            variants={inputButtonAnimate}
          >
            <Cards menu={menu} filteredMeal={filteredMeal} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
