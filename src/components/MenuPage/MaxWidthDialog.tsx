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

  // const {cooks} = useContext(CooksContext)

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
            <Box display={"flex"} alignItems={"center"}>
              <Box>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  {data.name}
                </Typography>
                <Typography id="modal-modal-description">{}</Typography>
              </Box>
              <Box ml={12}>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    minHeight: "25px",
                    minWidth: "8vw",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    fontWeight: "500",
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
                  ?????????? ????????????
                </Button>
              </Box>
            </Box>
            <Box>
              <Box display={"flex"} alignItems={"center"}>
                <img src="./img/CardMenuPage/curry.png" alt="food" />
                <Typography>??????????????????????????</Typography>
                <Box ml={2}>
                  <img src="./img/CardMenuPage/Group 16.png" alt="food" />
                  <img src="./img/CardMenuPage/Group 16.png" alt="food" />
                  <img src="./img/CardMenuPage/Group 18.png" alt="food" />
                </Box>
                <Typography ml={2}>?????????? ????????</Typography>
              </Box>
            </Box>
          </DialogContentText>
          <Paper sx={{ backgroundColor: "#EBEBEB" }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box mr={6} pt={1} pb={1}>
                <Avatar
                  alt="cook"
                  src={data.cook_avatar}
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Box ml={6}>
                <Typography variant="h6">{}</Typography>
                <Typography>????????????????????????????/?? ???? </Typography>
                <Typography>+389 78 55-0-13</Typography>
              </Box>
              <Box ml={6}>
                <img src={"./img/CardMenuPage/Group 19.png"} alt="arrow" />
              </Box>
            </Box>
          </Paper>
          <Box mt={2}>
            <hr />
          </Box>
          <Box display={"flex"}>
            <Box mt={3}>
              <Typography>???????????? ?????????? ?? ?????????? ???? ??????????????:</Typography>
            </Box>

            <Box>
              <DatePicker />
            </Box>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>
          <Box display={"flex"} mt={4}>
            <Box>
              <Typography>???????????? ????????????????</Typography>
              <Typography variant="body2">???????????????? 4 ????????????</Typography>
            </Box>
            <Paper
              sx={{
                marginLeft: 25,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF8F0",
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button onClick={() => setCount(count + 1)}>+</Button>
                <Typography>{count}</Typography>
                <Button onClick={() => setCount(count - 1)}>-</Button>
              </Box>
            </Paper>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>
          <Box>
            <Typography mt={2} mb={2}>
              ???????? ???? ????????????????
            </Typography>
            <Typography>{data.description}</Typography>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box>
            <Typography mt={2} mb={2}>
              ???????????? ????????????????
            </Typography>
            <Typography>{data.ingridients}</Typography>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box>
            <Typography mt={2} mb={2}>
              ???????????????????? ??????????????????
            </Typography>
            <Typography>{data.nutrition}</Typography>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box>
            <Typography mt={2} mb={2}>
              ?????????? ?????????????????? ????????????
            </Typography>
            <Typography>{data.alergies}</Typography>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box display={"flex"}>
            <Box>
              <Typography mt={2} mb={2}>
                ???????????????? ???? ?????????????????? ??????????????:
              </Typography>
              <Typography mt={2} mb={2}>
                300 ?? ?????????????????? ???? ????????
              </Typography>
            </Box>
            <Box>
              <GoogleMaps />
            </Box>
          </Box>

          <Box mt={2}>
            <hr />
          </Box>

          <Box>
            <Box mt={2} mb={2}>
              <Typography>?????? ?????????? ?????????????? ???? "{data.name}":</Typography>
            </Box>
            <Box display={"flex"}>
              <Box>
                <img src="./img/CardMenuPage/Ellipse 7 (1).png" alt="img" />
              </Box>
              <Box ml={2}>
                <Box display={"flex"}>
                  <Box mr={1}>
                    <Typography variant="body2">01.11.2022</Typography>
                  </Box>
                  <Box mr={16}>
                    <Typography variant="body2">???????? ??.</Typography>
                  </Box>
                  <Box>
                    <Rating name="read-only" value={value} readOnly />
                  </Box>
                </Box>
                <Typography variant="body2">
                  ?????????????? ????????!?????????????????? ???????? ???? ???????? ???? ?????????????????????? ????????????????,
                  ???????? ???? ???? ???????????????? ?? ?????????????????? ???? ???????? ??????.
                </Typography>
              </Box>
            </Box>

            <Box display={"flex"} mt={2}>
              <Box>
                <img src="./img/CardMenuPage/Ellipse 8.png" alt="img" />
              </Box>
              <Box ml={2}>
                <Box display={"flex"}>
                  <Box mr={1}>
                    <Typography variant="body2">02.09.2022</Typography>
                  </Box>
                  <Box mr={16}>
                    <Typography variant="body2">?????????? ??.</Typography>
                  </Box>
                  <Box>
                    <Rating name="read-only" value={value} readOnly />
                  </Box>
                </Box>
                <Typography variant="body2">
                  ???? ?????? ???????? ?????????????????????? ????????! ?????????????? ???? ?????????? ???????????? ???? ????
                  ???????????????? ?????? ???? ???????????????? ???? ???????? ????????????, ?????????????????????? ????
                  ?????????????? ??????.
                </Typography>
                <Box display={"flex"} alignItems={"end"} justifyContent={"end"}>
                  <Link href="#" underline="hover">
                    {/* ???????????????? ???? ???????? */}
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box bgcolor={"#FFF6ED"} mt={3}>
            <Box>
              {/* <Typography>???????????? ???? </Typography> */}
            </Box>
            <Box display={"flex"} alignItems={"end"} justifyContent={"end"}>
              {/* <Link href="#" underline="hover">
                ???????????????? ???? ????????
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
            ???????????? ???? ???????????????? - {data.price} ??????
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
