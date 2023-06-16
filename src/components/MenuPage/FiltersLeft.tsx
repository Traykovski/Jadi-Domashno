/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Button, Paper, Radio, Rating, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import DropDownMenu from "./DropDownMenu";

import { MenuInterface } from "../../context/menuContext";

interface Props {
  menu: MenuInterface[];

  handleSetMeal: (meal: string) => void;
  handleSetAlergeni: (alergeni: string) => void;
  isActive: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: string;

  delivery: string;
  handleChangeDelivery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeAvailable: (event: React.ChangeEvent<HTMLInputElement>) => void;
  val: number[];
  updateRange: (e: any, data: any) => void;
  selectedAvailable: string;
  setSelectedAvailable: Dispatch<SetStateAction<string>>;
}

export default function FiltersLeft({
  handleSetAlergeni,
  handleChange,
  selectedValue,
  delivery,
  handleChangeDelivery,
  val,
  updateRange,
  selectedAvailable,
  handleChangeAvailable,
}: Props) {
  const [rating3] = React.useState<number | null>(3);
  const [rating4] = React.useState<number | null>(4);
  const [rating5] = React.useState<number | null>(5);

  const [active, setActive] = useState("");

  const handleClick = (id: any) => {
    setActive(id);
  };

  return (
    <>
      <Paper
        sx={{
          paddingLeft: "20px",
          paddingRight: {
            md: "20px",
          },
          marginBottom: "20px",

          paddingTop: "10px",
          backgroundColor: "#FFF2E2",
          width: {
            xs: "94.8%",
            sm: "97%",
            md: "100%",
          },
        }}
      >
        <DropDownMenu />
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="caption" display={"block"}>
              Достапно веднаш
            </Typography>
            <Box ml={14}>
              <Radio
                checked={selectedAvailable === "веднаш"}
                onChange={handleChangeAvailable}
                value="веднаш"
                name="веднаш"
                inputProps={{ "aria-label": "веднаш" }}
                color="warning"
              />
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="caption" display={"block"}>
              Достапно утре
            </Typography>
            <Box ml={16.4}>
              <Radio
                checked={selectedAvailable === "утре"}
                onChange={handleChangeAvailable}
                value="утре"
                name="утре"
                inputProps={{ "aria-label": "утре" }}
                color="warning"
              />
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="caption" display={"block"}>
              Достапно по порачка
            </Typography>
            <Box ml={11.2}>
              <Radio
                checked={selectedAvailable === "по порачка"}
                onChange={handleChangeAvailable}
                value="по порачка"
                name="по порачка"
                inputProps={{ "aria-label": "по порачка" }}
                color="warning"
              />
            </Box>
          </Box>
        </Box>
        <hr />
        <Box>
          <Box>
            <Typography variant="caption" display={"block"}>
              Филтрирај по цена
            </Typography>

            <Slider
              value={val}
              onChange={updateRange}
              min={100}
              max={1000}
              step={1}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              sx={{
                color: "#f1592a",
                width: {
                  xs: "97%",
                  md: "100%",
                },
              }}
            />
          </Box>
          <Box display={"flex"}>
            <Typography variant="caption" display={"block"} mr={21}>
              100 ден
            </Typography>
            <Typography variant="caption" display={"block"}>
              1000 ден
            </Typography>
          </Box>
        </Box>

        <hr />
        <Typography variant="caption" display={"block"} mb={1}>
          Алергени:
        </Typography>
        <Box display={"flex"}>
          <Box mr={1}>
            <Box
              mb={1}
              className={`badge-white ${active === "1" ? "bg-active" : ""}`}
            >
              <Button disableRipple onClick={() => handleSetAlergeni("јатки")}>
                <Typography
                  variant="caption"
                  display={"block"}
                  color="#fe724d"
                  onClick={() => handleClick("1")}
                >
                  Јатки
                </Typography>
              </Button>
            </Box>
            <Box
              className={`badge-white ${active === "2" ? "bg-active" : ""}`}
              mb={1}
            >
              <Button disableRipple onClick={() => handleSetAlergeni("глутен")}>
                <Typography
                  variant="caption"
                  display={"block"}
                  color="#fe724d"
                  onClick={() => handleClick("2")}
                >
                  Глутен
                </Typography>
              </Button>
            </Box>
            <Box
              className={`badge-white ${active === "3" ? "bg-active" : ""}`}
              mb={1}
            >
              <Button
                disableRipple
                onClick={() => handleSetAlergeni("пченица")}
              >
                <Typography
                  variant="caption"
                  display={"block"}
                  color="#fe724d"
                  onClick={() => handleClick("3")}
                >
                  Пченица
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box mr={1}>
            <Box
              className={`badge-white ${active === "4" ? "bg-active" : ""}`}
              mb={1}
            >
              <Box>
                <Button disableRipple onClick={() => handleSetAlergeni("риба")}>
                  <Typography
                    variant="caption"
                    display={"block"}
                    color="#fe724d"
                    onClick={() => handleClick("4")}
                  >
                    Риба
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box
              className={`badge-white ${active === "5" ? "bg-active" : ""}`}
              mb={1}
            >
              <Button disableRipple onClick={() => handleSetAlergeni("соја")}>
                <Typography
                  variant="caption"
                  display={"block"}
                  color="#fe724d"
                  onClick={() => handleClick("5")}
                >
                  Соја
                </Typography>
              </Button>
            </Box>
            <Box
              className={`badge-white ${active === "6" ? "bg-active" : ""}`}
              mb={1}
            >
              <Button disableRipple onClick={() => handleSetAlergeni("мед")}>
                <Typography
                  variant="caption"
                  display={"block"}
                  color="#fe724d"
                  onClick={() => handleClick("6")}
                >
                  Мед
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Box
              className={`badge-white ${active === "7" ? "bg-active" : ""}`}
              mb={1}
            >
              <Button
                disableRipple
                onClick={() => handleSetAlergeni("лактоза")}
              >
                <Typography
                  variant="caption"
                  display={"block"}
                  color="#fe724d"
                  onClick={() => handleClick("7")}
                >
                  Лактоза
                </Typography>
              </Button>
            </Box>
            <Box
              className={`badge-white ${active === "8" ? "bg-active" : ""}`}
              mb={1}
            >
              <Button
                disableRipple
                onClick={() => handleSetAlergeni("чоколадо")}
              >
                <Typography
                  variant="caption"
                  display={"block"}
                  color="#fe724d"
                  onClick={() => handleClick("8")}
                >
                  Чоколадо
                </Typography>
              </Button>
            </Box>
            <Box
              className={`badge-white ${active === "9" ? "bg-active" : ""}`}
              mb={1}
            >
              <Button disableRipple onClick={() => handleSetAlergeni("морско")}>
                <Typography
                  variant="caption"
                  display={"block"}
                  color="#fe724d"
                  onClick={() => handleClick("9")}
                >
                  Морско
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <hr />
        <Box mb={1}>
          <Typography variant="caption" display={"block"}>
            Покажи по рејтинг:
          </Typography>
          <Box>
            <Box mb={1} display={"flex"} alignItems={"center"}>
              <Rating name="read-only" value={rating3} readOnly />
              <Box ml={7} display={"flex"} alignItems={"center"}>
                <Typography>3+</Typography>
              </Box>
              <Box ml={3}>
                <Radio
                  checked={selectedValue === "3"}
                  onChange={handleChange}
                  value="3"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "3" }}
                  color="warning"
                />
              </Box>
            </Box>
            <Box mb={1} display={"flex"} alignItems={"center"}>
              <Rating name="read-only" value={rating4} readOnly />
              <Box ml={7} display={"flex"} alignItems={"center"}>
                <Typography>4+</Typography>
              </Box>
              <Box ml={3}>
                <Radio
                  checked={selectedValue === "4"}
                  onChange={handleChange}
                  value="4"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "4" }}
                  color="warning"
                />
              </Box>
            </Box>
            <Box mb={1} display={"flex"} alignItems={"center"}>
              <Rating name="read-only" value={rating5} readOnly />
              <Box ml={7} display={"flex"} alignItems={"center"}>
                <Typography>5</Typography>
              </Box>
              <Box ml={4}>
                <Radio
                  checked={selectedValue === "5"}
                  onChange={handleChange}
                  value="5"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "5" }}
                  color="warning"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <hr />
          <Box mb={1} display={"flex"} alignItems={"center"}>
            <Box>
              <Typography variant="caption" display={"block"}>
                Достава
              </Typography>
            </Box>
            <Box ml={5} mr={5.8} className="ship">
              <img src="./img/FiltersLeft/Group 210.png" alt="icon-png" />
            </Box>
            <Box ml={5}>
              <Radio
                checked={delivery === "yes"}
                onChange={handleChangeDelivery}
                value="yes"
                name="radio-buttons"
                inputProps={{ "aria-label": "yes" }}
                color="warning"
              />
            </Box>
          </Box>
          <Box pb={4} display={"flex"} alignItems={"center"}>
            <Box>
              <Typography variant="caption" display={"block"}>
                Подигање
              </Typography>
            </Box>
            <Box ml={4} mr={6.5} className="ship">
              <img src="./img/FiltersLeft/Group 212.png" alt="icon-png" />
            </Box>
            <Box ml={4}>
              <Radio
                checked={delivery === "no"}
                onChange={handleChangeDelivery}
                value="no"
                name="radio-buttons"
                inputProps={{ "aria-label": "no" }}
                color="warning"
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
