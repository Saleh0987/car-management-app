import {createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cars: JSON.parse(localStorage.getItem("cars")) || [],
  loading: false,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    addCar: (state, action) => {
      state.cars.push(action.payload);
      localStorage.setItem("cars", JSON.stringify(state.cars)); 
      state.loading = false;
    },

    editCar: (state, action) => {
      const {id, updatedCar} = action.payload;
      const carIndex = state.cars.findIndex((car) => car.id === id);
      if (carIndex !== -1) {
        state.cars[carIndex] = {...state.cars[carIndex], ...updatedCar};
      }
      localStorage.setItem("cars", JSON.stringify(state.cars)); 
      state.loading = false;
    },

    deleteCars: (state, action) => {
      const idsToDelete = action.payload;
      state.cars = state.cars.filter((car) => !idsToDelete.includes(car.id));
      localStorage.setItem("cars", JSON.stringify(state.cars)); 
      state.loading = false;
    },
  },
});

export const {setLoading, addCar, editCar, deleteCars} = carSlice.actions;
export default carSlice.reducer;
