import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCars } from "../../redux/carSlice";
import { List, Button, TextField, Typography } from "@mui/material";
import CarListItem from "./CarListItem";
import Spinner from "../Spinner/Spinner";

const CarList = ({ setEditingCar }) => {
  const { cars } = useSelector((state) => state.car);
  const dispatch = useDispatch();
  const [selectedCars, setSelectedCars] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setInitialLoading(true);
    const timer = setTimeout(() => setInitialLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [cars]);

  const handleSelect = useCallback(
    (id) => {
      setSelectedCars((prev) => {
        const isSelected = prev.includes(id);
        if (isSelected) {
          return prev.filter((itemId) => itemId !== id);
        } else {
          return [...prev, id];
        }
      });
    },
    []
  );

  const handleSelectAll = useCallback(() => {
    setSelectedCars(selectedCars.length === cars.length ? [] : cars.map((car) => car.id));
  }, [cars, selectedCars]);

  const handleDeleteSelected = useCallback(() => {
    if (selectedCars.length > 0) {
      dispatch(deleteCars(selectedCars)); 
      setSelectedCars([]); 
    }
  }, [selectedCars, dispatch]);


  const filteredCars = useMemo(
    () =>
      cars.filter((car) =>
        car.model.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [cars, searchQuery]
  );

  const carList = useMemo(
    () =>
      filteredCars.map((car) => (
        <CarListItem
          key={car.id} 
          car={car}
          selected={selectedCars.includes(car.id)}  
          onSelect={() => handleSelect(car.id)}  
          onDelete={() => dispatch(deleteCars([car.id]))}  
          setEditingCar={setEditingCar}
        />
      )),
    [filteredCars, selectedCars, handleSelect, setEditingCar, dispatch]
  );

  if (initialLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Typography variant="h6" style={{ marginBottom: "10px", marginTop: "10px" }}>
        Total Cars: {cars.length}
      </Typography>
      {cars.length > 0 ? (
        <>
          <TextField
            label="Search by model"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <List>{carList}</List>
        </>
      ) : (
        <Typography
          variant="h6"
          style={{ textAlign: "center", color: "gray", marginTop: "20px" }}
        >
          No products available
        </Typography>
      )}

      {cars.length > 0 && filteredCars.length > 0 && (
        <div>
          <Button variant="contained" onClick={handleSelectAll}
          style={{textTransform: "capitalize" }}>
            {selectedCars.length === cars.length ? "Deselect All" : "Select All"}
          </Button>
          {selectedCars.length > 0 && (
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteSelected}
              style={{ marginLeft: "10px", textTransform: "capitalize" }}>
              Delete Selected
            </Button>
          )}
        </div>
      )}
    </>
  );
};


export default CarList;
