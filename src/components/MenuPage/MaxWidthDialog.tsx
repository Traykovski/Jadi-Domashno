import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {
  Avatar,
  CardMedia,
  Grid,
  Link,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import DatePicker from "./DatePicker";
import GoogleMaps from "./GoogleMaps";
import { MenuInterface } from "../../context/menuContext";

interface Props {
  data: MenuInterface;
}

export default function MaxWidthDialog({ data }: Props) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

  const [value] = React.useState<number | null>(4);
  const [count, setCount] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Link onClick={handleClickOpen}>
        <CardMedia
          sx={{ minHeight: 240 }}
          image={data.image}
          title={data.name}
          className="link"
        />
      </Link>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent sx={{ backgroundColor: "#FFF8F0", overflowX: "hidden" }}>
          <Box className="bg-img">
            <img src={data.image} alt="food" />
          </Box>
          <DialogContentText>
            <Grid container>
              <Grid item xs={6}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {data.name}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      textTransform: "capitalize",

                      fontSize: "11px",
                      color: "white",
                      backgroundColor: "#f1592a",
                      borderColor: "#EF7204",
                      ":hover": {
                        color: "#EF7200",
                        borderColor: "#EF7200",
                      },
                    }}
                  >
                    Прати порака
                  </Button>
                </Box>
              </Grid>
              {/* </Box> */}
            </Grid>
            <Box>
              <Box display={"flex"} alignItems={"center"}>
                <img src="./img/CardMenuPage/curry.png" alt="food" />
                <Typography
                  sx={{
                    fontSize: {
                      xs: ".8rem",
                      sm: "1rem",
                    },
                  }}
                >
                  Традиционално
                </Typography>
                <Box
                  sx={{
                    marginLeft: {
                      xs: "5px",
                      sm: 2,
                    },

                    flexShrink: 0,
                  }}
                >
                  <img src="./img/CardMenuPage/Group 16.png" alt="food" />
                  <img src="./img/CardMenuPage/Group 16.png" alt="food" />
                  <img src="./img/CardMenuPage/Group 18.png" alt="food" />
                </Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: ".8rem",
                      sm: "1rem",
                    },
                    marginLeft: {
                      xs: "5px",
                      sm: 2,
                    },
                  }}
                >
                  Малку луто
                </Typography>
              </Box>
            </Box>
          </DialogContentText>
          <Paper sx={{ backgroundColor: "#EBEBEB", minWidth: "100%" }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box pt={1} pb={1}>
                <Avatar
                  alt="cook"
                  src={data.cook_avatar}
                  sx={{
                    width: {
                      xs: 50,
                      sm: 100,
                    },
                    height: {
                      xs: 50,
                      sm: 100,
                    },
                    marginRight: {
                      xs: 0,
                      sm: 10,
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: {
                    xs: "10px",
                    sm: 4,
                  },
                }}
              >
                <Typography variant="h6">{}</Typography>
                <Typography>Специјализиран/а по </Typography>
                <Typography>+389 78 55-0-13</Typography>
              </Box>
            </Box>
          </Paper>
          <Box mt={2}>
            <hr />
          </Box>
          <Box display={"flex"}>
            <Box mt={3}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                  },
                }}
              >
                Одбери датум и време на нарачка:
              </Typography>
            </Box>

            <Box>
              <DatePicker />
            </Box>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>
          <Grid container>
            <Grid item xs={6}>
              <Typography mt={1.5}>Одбери количина</Typography>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  borderRadius: 10,
                  backgroundColor: "#FFF8F0",
                  width: "100%",
                  maxWidth: "80%",
                  marginTop: 1,
                  flexShrink: 0,
                }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Button disableRipple onClick={() => setCount(count + 1)}>
                    +
                  </Button>
                  <Typography>{count}</Typography>
                  <Button disableRipple onClick={() => setCount(count - 1)}>
                    -
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Box mt={2}>
            <hr />
          </Box>
          <Box>
            <Typography mt={2} mb={2}>
              Опис на јадењето
            </Typography>
            <Typography>{data.description}</Typography>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box>
            <Typography mt={2} mb={2}>
              Главни состојки
            </Typography>
            <Typography>{data.ingridients}</Typography>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box>
            <Typography mt={2} mb={2}>
              Нутритивни вредности
            </Typography>
            <Typography>{data.nutrition}</Typography>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box>
            <Typography mt={2} mb={2}>
              Можни алергиски појави
            </Typography>
            <Typography>{data.alergies}</Typography>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box textAlign={"center"}>
            <Typography mt={2} mb={2}>
              Локација за преземање нарачка:
            </Typography>
            {/* <Typography mt={2} mb={2}>
                300 м одалечено од тебе
              </Typography> */}
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <GoogleMaps />
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box mt={2} mb={2} textAlign={"center"}>
            <Typography>Што кажаа другите за "{data.name}":</Typography>
          </Box>

          <Box>
            <img src="./img/CardMenuPage/Ellipse 7 (1).png" alt="img" />
          </Box>

          <Box mr={1} mt={2}>
            <Typography variant="body2">01.11.2022</Typography>
          </Box>
          <Box mr={16}>
            <Typography variant="body2">Сања Г.</Typography>
          </Box>
          <Box>
            <Rating name="read-only" value={value} readOnly />
          </Box>

          <Typography variant="body2">
            Одличен вкус!Доставата кога би била во поадекватно пакување, како би
            се задржала и топлината би било врв.
          </Typography>

          <Box>
            <img src="./img/CardMenuPage/Ellipse 8.png" alt="img" />
          </Box>

          <Box mr={1}>
            <Typography variant="body2">02.09.2022</Typography>
          </Box>
          <Box mr={16}>
            <Typography variant="body2">Горан Г.</Typography>
          </Box>
          <Box>
            <Rating name="read-only" value={value} readOnly />
          </Box>
          {/* </Box> */}
          <Typography variant="body2">
            За мој вкус презачинето беше! Доколку би имало опција да се корегира
            тоа со напомена од моја страна, дефинитивно би порачал пак.
          </Typography>
          <Box display={"flex"} alignItems={"end"} justifyContent={"end"}>
            <Link href="#" underline="hover">
              {/* Погледни ги сите */}
            </Link>
          </Box>

          <Box bgcolor={"#FFF6ED"} mt={3}>
            <Box>{/* <Typography>Повеќе од </Typography> */}</Box>
            <Box display={"flex"} alignItems={"end"} justifyContent={"end"}>
              {/* <Link href="#" underline="hover">
                Погледни ги сите
              </Link> */}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "#f1592a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button sx={{ color: "#FFF8F0" }} onClick={handleClose}>
            Додади во кошничка - {data.price} мкд
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
