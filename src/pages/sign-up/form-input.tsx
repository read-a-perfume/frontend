import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled, Box } from "@mui/material";

type Props = {
  label?: string;
  type?: "text" | "password" | "email";
  value?: string;
  name?: string;
  placeholder?: string;
  showPassword?: boolean;
  text?: React.ReactNode;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleShowPassword?: () => void;
  onMouseDownPassword?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const FormInput = (props: Props) => {
  const { label, children, text } = props;

  return (
    <Grid item xs={9}>
      <FormItem>
        <Typography variant="body3" mb={2}>
          {label}
        </Typography>
        {children}
        {text}
      </FormItem>
    </Grid>
  );
};
export default FormInput;
export const FormItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& input": {
    fontSize: theme.typography.body3,
  },
}));
