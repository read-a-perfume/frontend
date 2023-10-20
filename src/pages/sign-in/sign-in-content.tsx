import { Dialog } from "@mui/material";
import SignInForm from "./sign-in-form";
import styled from "@emotion/styled";

type SignIn = {
  isDialog: boolean;
  changeSignInDialog: any;
};

const SignInContent = ({ ...props }: SignIn) => {
  return (
    <SignInDialog
      open={props.isDialog}
      onClose={props.changeSignInDialog}
      fullWidth
    >
      <SignInForm />
    </SignInDialog>
  );
};

export default SignInContent;
const SignInDialog = styled(Dialog)(() => ({
  maxWidth: 420,
  margin: "0 auto",
}));
