import {
  Box,
  Button,
  CardActions,
  Rating,
  Stack,
  Typography,
  Card,
  Avatar,
} from "@mui/material";


import MaxWidthDialog from "./MaxWidthDialog";
import { MenuInterface } from "../../context/menuContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  data: MenuInterface;
}

export default function CardMenuPage({ data }: Props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 360,
          borderTopLeftRadius: "17px",
          borderTopRightRadius: "17px",
          borderBottomLeftRadius: "20%",
          borderBottomRightRadius: "17px",
        }}
        component={motion.div}
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <MaxWidthDialog data={data} />
        <Box></Box>
        <Box sx={{ backgroundColor: "#FFF2E2" }} className="rounded2">
          <Box display={"flex"} className="img-card">
            <Box>
              <Link to={`/cook-details/${data.cookId}`}>
                <Avatar
                  alt="cook"
                  src={data.cook_avatar}
                  sx={{ width: 100, height: 100 }}
                  component={motion.div}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
              </Link>
            </Box>
            <Box>
              <Box display={"flex"}>
                <Typography gutterBottom fontSize={14}>
                  {data.name}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  color="#EF7204"
                  pl={6}
                >
                  {data.price} ден
                </Typography>
              </Box>

              <Box mt={1} className="rounded">
                <Stack spacing={1} ml={2}>
                  <Rating
                    name="half-rating"
                    size="small"
                    sx={{ color: "#F1592A" }}
                    defaultValue={data.reviews}
                    precision={0.5}
                    readOnly
                  />
                </Stack>

                <Typography variant="body2" mt={1} ml={5}></Typography>
              </Box>
              <Box display={"flex"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  pl={2}
                >
                  <img src="./img/Card/home.png" alt="house-png" />
                  <Typography>- 300 м</Typography>
                </Box>
                <Box>
                  <CardActions sx={{ width: "100%" }} className="rounded2">
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        height: "25px",
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
                      component={motion.div}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      {data.button_title}
                    </Button>
                  </CardActions>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}
