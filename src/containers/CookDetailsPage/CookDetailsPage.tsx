import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Rating,
  Grid,
  Paper,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { CooksInterface } from "../../context/cooksContext";
import Calendar from "../../components/MenuPage/Calendar";
import { Context as MenuContext } from "../../context/menuContext";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function CookDetailsPage() {
  const { id } = useParams();
  const [cookData, setCookData] = useState<CooksInterface>();
  const { menu } = useContext(MenuContext);

  // const [value, setValue] = React.useState<number | null>(4);
  // const { cooks } = useContext(Context);
  useEffect(() => {
    fetch(`http://localhost:8000/cooks/${id}`)
      .then((res) => res.json())
      .then((data) => setCookData(data))
      .catch((err) => console.log("Error", err));
      // eslint-disable-next-line
  }, []);

  let salad = menu.filter((s) => s.meal === "салата");
  let meals = menu.filter(
    (m) => m.meal === "чорби" || m.meal === "бургер" || m.meal === "оброк"
  );
  // console.log(`meals ${meals}`);
  let desert = menu.filter((d) => d.meal === "десерт");

  return (
    <Box>
      {cookData && (
        <>
          <Box>
            <img src={cookData.img} alt="food" className="cook-img" />
          </Box>
          <Box ml={4} mr={4} mt={10} display={"flex"} alignItems={"center"}>
            <Box mr={4}>
              <Avatar
                alt="Remy Sharp"
                src={cookData.avatar}
                sx={{ width: 156, height: 156 }}
              />
            </Box>
            <Box>
              <Typography variant="h6">
                {cookData.first_name} {cookData.last_name}
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Box>
                  <Link to={"/"}>
                    <img src="/img/CardMenuPage/Group 360.png" alt="share" />
                  </Link>
                </Box>

                <Box ml={2} mr={2} className="message">
                  <img src="/img/CardMenuPage/Group 287.png" alt="message" />
                  <Typography ml={2}>Прати порака на готвачот</Typography>
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Typography>{cookData.food_type_three}</Typography>
                <Box>
                  <img src={cookData.food_icon} alt="food" />
                </Box>
                <Box ml={2} mr={2}>
                  <img src={cookData.icon} alt="home-icon" />
                </Box>
                <Typography>300 м</Typography>
                <Box ml={3} display={"flex"} alignItems={"center"}>
                  <img
                    src="/img/CardMenuPage/entypo_location-pin.png"
                    alt="adress"
                  />
                  <Typography
                    component={Link}
                    to="/"
                    noWrap
                    color={"ButtonText"}
                  >
                    Види точна адреса
                  </Typography>
                </Box>
              </Box>

              <Typography
                fontFamily={"Bad Script"}
                fontWeight={700}
                fontSize={18}
              >
                {cookData.about_me}
              </Typography>
            </Box>
          </Box>
        </>
      )}
      <Box mt={3} mb={3}>
        <Typography textAlign={"center"} mb={1} fontWeight={"bold"}>
          Одбери датум:
        </Typography>
        <Calendar />
      </Box>
      <Container>
        <Typography color={"#f1592a"} textTransform={"uppercase"} mb={3}>
          Достапни јадења за недела
        </Typography>

        <Grid container>
          {meals
            .filter((cI) => cI.cookId === id)
            .map((card) => {
              return (
                <Grid item xs={4}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      marginRight: 4,
                      marginBottom: 5,
                      height: 450,
                    }}
                    key={card.id}
                  >
                    <CardMedia
                      component="img"
                      alt={card.name}
                      height="140"
                      image={card.image}
                    />
                    <CardContent>
                      <Box display={"flex"} alignItems={"center"}>
                        <Typography gutterBottom variant="h5" component="div">
                          {card.name}
                        </Typography>
                        <Typography color={"#EF7204"} pl={5}>
                          {card.price} ден
                        </Typography>
                      </Box>
                      <Rating
                        name="read-only"
                        defaultValue={card.reviews}
                        readOnly
                      />
                      <Typography variant="body2" color="text.secondary">
                        {card.ingridients}
                      </Typography>
                      <Box display={"flex"} alignItems={"center"} mt={2}>
                        <AccessTimeFilledIcon color="warning" />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          pl={2}
                        >
                          до {card.time_to_prep}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        size="small"
                        color="warning"
                        variant="contained"
                        sx={{
                          borderRadius: "20px",
                          backgroundColor: "#FE724D",
                          marginLeft: "4px",
                          marginRight: "4px",
                          textAlign: "center",
                          // width: "160px",
                        }}
                      >
                        Додај во кошничка
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>

        <Typography color={"#f1592a"} textTransform={"uppercase"} mb={3}>
          предлог додатоци кон јадењата за недела
        </Typography>

        <Grid container>
          {salad
            .filter((cId) => cId.cookId === id)
            .map((card) => {
              return (
                <Grid item xs={4}>
                  <Card
                    sx={{ maxWidth: 345, marginRight: 4, marginBottom: 5 }}
                    key={card.id}
                  >
                    <CardMedia
                      component="img"
                      alt={card.name}
                      height="140"
                      image={card.image}
                    />
                    <CardContent>
                      <Box display={"flex"} alignItems={"center"}>
                        <Typography gutterBottom variant="h5" component="div">
                          {card.name}
                        </Typography>
                        <Typography color={"#EF7204"} pl={5}>
                          {card.price} ден
                        </Typography>
                      </Box>
                      <Rating
                        name="read-only"
                        defaultValue={card.reviews}
                        readOnly
                      />
                      <Typography variant="body2" color="text.secondary">
                        {card.ingridients}
                      </Typography>
                      <Box display={"flex"} alignItems={"center"} mt={2}>
                        <AccessTimeFilledIcon color="warning" />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          pl={2}
                        >
                          до {card.time_to_prep}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        size="small"
                        color="warning"
                        variant="contained"
                        sx={{
                          borderRadius: "20px",
                          backgroundColor: "#FE724D",
                          marginLeft: "4px",
                          marginRight: "4px",
                          textAlign: "center",
                          // width: "160px",
                        }}
                      >
                        Додај во кошничка
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>

        <Typography color={"#f1592a"} textTransform={"uppercase"} mb={3}>
          предлог десерти за недела
        </Typography>

        <Grid container>
          {desert
            .filter((cId) => cId.cookId === id)
            .map((card) => {
              return (
                <Grid item xs={4}>
                  <Card
                    sx={{ maxWidth: 345, marginRight: 4, marginBottom: 5 }}
                    key={card.id}
                  >
                    <CardMedia
                      component="img"
                      alt={card.name}
                      height="140"
                      image={card.image}
                    />
                    <CardContent>
                      <Box display={"flex"} alignItems={"center"}>
                        <Typography gutterBottom variant="h5" component="div">
                          {card.name}
                        </Typography>
                        <Typography color={"#EF7204"} pl={5}>
                          {card.price} ден
                        </Typography>
                      </Box>
                      <Rating
                        name="read-only"
                        defaultValue={card.reviews}
                        readOnly
                      />
                      <Typography variant="body2" color="text.secondary">
                        {card.ingridients}
                      </Typography>
                      <Box display={"flex"} alignItems={"center"} mt={2}>
                        <AccessTimeFilledIcon color="warning" />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          pl={2}
                        >
                          до {card.time_to_prep}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        size="small"
                        color="warning"
                        variant="contained"
                        sx={{
                          borderRadius: "20px",
                          backgroundColor: "#FE724D",
                          marginLeft: "4px",
                          marginRight: "4px",
                          textAlign: "center",
                          // width: "160px",
                        }}
                      >
                        Додај во кошничка
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>

        <Typography color={"#f1592a"} textTransform={"uppercase"} mb={3}>
          препораки за јадењата на готвачот од претходни корисници
        </Typography>

        <Grid container>
          <Grid item xs={4}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
