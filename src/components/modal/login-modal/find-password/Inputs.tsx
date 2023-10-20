import { FormControl, TextField } from "@mui/material";
import React from "react";
import { inputStyle } from "../login-modal.style";
import { InputProps } from "./find-password.interface";
import { ConfirmButton, Label } from "./find-password.style";

const Inputs = ({
  setCondition,
  inputs,
  setInputs,
  errors,
  setErrors,
}: InputProps) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
    setErrors(errors);
  };

  return (
    <FormControl fullWidth>
      <Label>아이디</Label>
      <TextField
        required
        fullWidth
        size="small"
        placeholder="아이디"
        name="id"
        sx={inputStyle}
        value={inputs.id}
        onChange={changeHandler}
      />
      <Label>이메일</Label>
      <TextField
        required
        fullWidth
        type="email"
        size="small"
        placeholder="이메일"
        name="email"
        sx={inputStyle}
        value={inputs.email}
        onChange={changeHandler}
      />
      <ConfirmButton
        type="submit"
        fullWidth
        disabled={inputs.email === "" || inputs.id === ""}
        onClick={() => setCondition("password_email")}
      >
        확인
      </ConfirmButton>
    </FormControl>
  );
};

export default Inputs;
