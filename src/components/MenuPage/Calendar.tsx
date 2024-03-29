import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export interface OrdersType {
  id: string;
  cookId: string;
  day?: string;
  date: string;
  time: string;
  meal: string;
}
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: any;
  onClose: (value: any) => void;
  selectedDate?: Date | null;
}

export default function Calendar() {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [orders, setOrders] = useState<OrdersType[]>([]);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [open, setOpen] = React.useState(false);
  const [selectedMeal, setSelectedMeal] = useState<string>();

  useEffect(() => {
    // fetch("http://localhost:8000/orders")
    fetch("https://jadi-domashno.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  const months = [
    "ЈАН",
    "ФЕВ",
    "МАР",
    "АПР",
    "МАЈ",
    "ЈУН",
    "ЈУЛ",
    "АВГ",
    "СЕП",
    "ОКТ",
    "НОЕ",
    "ДЕК",
  ];
  const days = ["ПОН", "ВТО", "СРЕ", "ЧЕТ", "ПЕТ", "САБ", "НЕД"];
  const today = new Date();

  const handlePreviusWeek = () => {
    setCurrentWeek(
      new Date(
        currentWeek.getFullYear(),
        currentWeek.getMonth(),
        currentWeek.getDate() - 7
      )
    );
  };

  const handleNextWeek = () => {
    setCurrentWeek(
      new Date(
        currentWeek.getFullYear(),
        currentWeek.getMonth(),
        currentWeek.getDate() + 7
      )
    );
  };

  // modal
  const handleClickOpen = (selectedDate: Date) => {
    setOpen(true);
    setSelectedDate(selectedDate);
    const selectedDateString = selectedDate.toLocaleDateString("mk-MK");

    const meal = orders.find(
      (order) =>
        new Date(order.date).toLocaleDateString("mk-MK") === selectedDateString
    )?.meal;
    setSelectedMeal(meal);
  };

  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        {/* <Box> */}
        <Box
          sx={{
            maxWidth: {
              xs: "5%",
              sm: "100%",
            },
            flexShrink: 0,
            cursor: "pointer",
          }}
          onClick={handlePreviusWeek}
        >
          <img src="/img/Group 120.png" alt="icon" />
        </Box>

        <Box>
          <table>
            <tbody>
              <tr>
                <td className="today">
                  <Paper
                    sx={{
                      textAlign: "center",
                      fontSize: {
                        xs: ".7rem",
                        md: "1rem",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <p>ДЕН</p>
                    <p>
                      {today.toLocaleDateString("mk-MK", { day: "numeric" })}
                    </p>
                    <p>{months[today.getMonth()]}</p>
                  </Paper>
                </td>
                {/* When Array.from gets a value of property length (7 in this case), then it creates a real array with length 7.The second part is just an arrow function which populates an array with values. */}
                {Array.from({ length: 7 }, (a, i) => {
                  const date = new Date(
                    currentWeek.getFullYear(),
                    currentWeek.getMonth(),
                    currentWeek.getDate() - currentWeek.getDay() + i
                  );
                  const dayOfMonth = date.getDate();

                  const formattedDate = date.toLocaleDateString("mk-MK", {
                    day: "numeric",
                  });
                  const dayName = days[date.getDay()];
                  const monthName = months[date.getMonth()];

                  return (
                    <td className="space" key={i}>
                      <Box className={`date-${dayOfMonth}`}>
                        <Paper
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "100%",
                            },

                            textAlign: "center",
                            ml: {
                              xs: 0,
                              md: 3,
                            },

                            cursor: "pointer",
                          }}
                        >
                          <Box onClick={() => handleClickOpen(date)}>
                            <Box
                              color={"grey"}
                              sx={{
                                fontSize: {
                                  xs: ".7rem",
                                  md: "1rem",
                                },
                              }}
                            >
                              <p>{dayName}</p>
                              <p>{formattedDate}</p>
                              <p> {monthName}</p>
                            </Box>
                          </Box>
                        </Paper>
                      </Box>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>

          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>
              {selectedDate.toLocaleDateString("mk-MK")}
            </DialogTitle>
            <DialogContent>
              {selectedMeal ? (
                <DialogContentText>{selectedMeal}</DialogContentText>
              ) : (
                <DialogContentText>
                  There is no meal for this day.
                </DialogContentText>
              )}
            </DialogContent>
          </Dialog>
        </Box>

        <Box
          sx={{
            maxWidth: {
              xs: "5%",
              sm: "100%",
            },
            cursor: "pointer",
            marginLeft: {
              xs: 0,
              md: "16px",
            },
            flexShrink: 0,
          }}
          onClick={handleNextWeek}
        >
          <img src="/img/Group 121.png" alt="icon" />
        </Box>
      </Box>
    </>
  );
}
