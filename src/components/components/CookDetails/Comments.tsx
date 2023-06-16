import React from "react";
import { MenuInterface } from "../../../context/menuContext";

import { Paper } from "@mui/material";

export default function Comments({ reviewsList }: MenuInterface) {
 
  return (
    <div>
      <>
        {reviewsList.map((r) => {
          return <Paper>{r.comment}</Paper>;
        })}
       
      </>
    </div>
  );
}
