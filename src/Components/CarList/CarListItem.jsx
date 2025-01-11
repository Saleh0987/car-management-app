import React from "react";
import { Checkbox, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from "@mui/material";

const CarListItem = ({ car, index, selected, onSelect, onDelete, setEditingCar }) => {
  return (
    <ListItem>
      <Checkbox checked={selected} onChange={() => onSelect(index)} />
      {car.image && (
        <ListItemAvatar>
          <Avatar src={car.image} alt={car.model} />
        </ListItemAvatar>
      )}
      <ListItemText
        primary={car.model}
        secondary={`Price: $${car.price}, Color: ${car.color}, Date: ${car.date}`}/>
      <Button variant="outlined"
        style={{ textTransform: "capitalize" }}
        onClick={() => setEditingCar({ ...car, index })}>
        Edit 
      </Button>
      <Button
       variant="outlined"
       color="error"
       style={{ marginLeft: "10px", textTransform: "capitalize" }}
       onClick={() => onDelete(car.id)}>
       Delete
     </Button>

    </ListItem>
  );
};

export default CarListItem;
