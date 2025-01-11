import React, { memo } from "react";
import {
  CarModelField,
  PriceField,
  ColorField,
  DateField,
  ImageUploadField,
  SubmitButton,
  LoadingButton,
} from "./FormFields";
import { useForm } from "../../Hooks/useForm";
import { useSelector } from "react-redux";

const Form = memo(({ editingCar, setEditingCar }) => {
  const { car, error, image, handleChange, handleImageChange, handleSubmit } = useForm(editingCar, setEditingCar);
  const loading = useSelector((state) => state.car.loading);

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: '10px' }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarModelField value={car.model} onChange={handleChange} error={error.model} />
        <PriceField value={car.price} onChange={handleChange} error={error.price} />
        <DateField value={car.date} onChange={handleChange} error={error.date} />
        <ColorField value={car.color} onChange={handleChange} error={error.color} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <ImageUploadField onChange={handleImageChange} error={error.image} isImageSelected={!!image} />
        {loading ? <LoadingButton /> :
        <SubmitButton onSubmit={handleSubmit} isEditing={!!editingCar} />}
      </div>
    </form>
  );
});

export default Form;
