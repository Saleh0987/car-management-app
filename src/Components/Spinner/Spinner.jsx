import React from "react";
import { CircularProgress } from "@mui/material";

const Spinner = () => (
  <div
    style={{
      minHeight: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress size={50} />
  </div>
);

export default Spinner;
