import React from "react";
import { TextField, MenuItem, Select, Button, Box, CircularProgress } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export const CarModelField = ({ value, onChange, error }) => (
  <TextField
    style={{ width: "24%" }}
    label="Car Model"
    name="model"
    type="text"
    margin="normal"
    value={value}
    onChange={onChange}
    error={error}
  />
);

export const PriceField = ({ value, onChange, error }) => (
  <TextField
    style={{ width: "24%" }}
    label="Price"
    name="price"
    type="number"
    margin="normal"
    value={value}
    onChange={onChange}
    error={error}
  />
);

export const ColorField = ({ value, onChange, error }) => (
  <Select
    style={{ width: "24%" }}
    name="color"
    value={value}
    displayEmpty
    onChange={onChange}
    error={error}
    sx={{ marginY: 2 }}
  >
    <MenuItem value="" disabled>
      Select Color
    </MenuItem>
    <MenuItem value="Red">Red</MenuItem>
    <MenuItem value="Black">Black</MenuItem>
    <MenuItem value="White">White</MenuItem>
    <MenuItem value="Orange">Orange</MenuItem>
  </Select>
);

export const DateField = ({ value, onChange, error }) => (
  <TextField
    style={{ width: "24%" }}
    label="Manufacture Date"
    name="date"
    type="date"
    margin="normal"
    value={value}
    onChange={onChange}
    InputLabelProps={{ shrink: true }}
    error={error}
  />
);

export const ImageUploadField = ({ onChange, error, isImageSelected }) => (
  <Button
    style={{ width: "48%", textTransform: "capitalize" }}
    component="label"
    variant={error ? "outlined" : "contained"}
    startIcon={<CloudUploadIcon />}
     color={isImageSelected ? "success" : error ? "error" : "secondary"}>
    {isImageSelected ? "Image Selected" : "Upload Image"}
    <VisuallyHiddenInput type="file" accept="image/*" onChange={onChange} />
  </Button>
);

export const SubmitButton = ({ onSubmit, isEditing }) => (
  <Button style={{ width: "48%", textTransform: "capitalize" }} onClick={onSubmit} variant="contained">
    {isEditing ? "Save" : "Add Car"}
  </Button>
);

export const LoadingButton = () => (
  <Button style={{ width: "48%", background: "black" }} variant="contained" >
    <CircularProgress size={24} style={{color :"red" }}/> 
  </Button>
);
