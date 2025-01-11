import { useDispatch } from "react-redux";
import { addCar, editCar, setLoading } from "../redux/carSlice";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid
import toast from "react-hot-toast";

export const useForm = (editingCar, setEditingCar) => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [error, setError] = useState({
    model: false,
    price: false,
    color: false,
    date: false,
    image: false,
  });

  const [car, setCar] = useState({
    model: "",
    price: "",
    color: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
    setError({ ...error, [name]: value === "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCar({ ...car, image: reader.result });
        setError((prevError) => ({ ...prevError, image: false }));
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setError((prevError) => ({ ...prevError, image: true }));
    }
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const newError = {};

    Object.keys(car).forEach((key) => {
      if (key !== "image" && car[key] === "") {
        newError[key] = true;
        formIsValid = false;
      }
    });

    if (!car.image) {
      newError.image = true;
      formIsValid = false;
    }
    setError(newError);
    if (!formIsValid) return;

    
    dispatch(setLoading(true)); 
    setTimeout(() => {
      if (editingCar) {
        dispatch(editCar({ id: editingCar.id, updatedCar: car }));
        setEditingCar(null);
        toast.success("Car updated successfully!"); 
      } else {
        const newCar = { ...car, id: uuidv4() };
        dispatch(addCar(newCar));
        toast.success("Car added successfully!");
      }

      setCar({ model: "", price: "", color: "", date: "", image: null });
      setImage(null);
      dispatch(setLoading(false)); 
    }, 1000);
  };

  useEffect(() => {
    if (editingCar) {
      setCar(editingCar);
    }
  }, [editingCar]);

  return { car, error, handleChange, handleImageChange, handleSubmit, image };
};
