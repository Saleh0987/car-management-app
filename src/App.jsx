import { Container } from "@mui/material";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CarList from "./Components/CarList/CarList";
import Form from "./Components/Form/Form";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [editingCar, setEditingCar] = useState(null);

  return (
    <Provider store={store}>
      <Toaster />
      <Container>
        <h1 style={{textAlign: "center"}}>Car Management App</h1>
        <Form editingCar={editingCar} setEditingCar={setEditingCar} />
        <CarList setEditingCar={setEditingCar} />
      </Container>
    </Provider>
  );
};

export default App;