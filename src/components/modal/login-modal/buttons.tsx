import FlexBox from "@layouts/flex-box";
import LinkLayout from "@layouts/link-layout";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonsProps } from "./login-modal.interface";
import {
  DividerText,
  GoogleButton,
  GoogleIcon,
  LoginButton,
} from "./login-modal.style";

const Buttons = ({ tabClick, errors, inputs, condition }: ButtonsProps) => {
  const navigate = useNavigate();

  const submitHandler = () => {
    console.log({
      ...inputs,
      condition: condition,
    });
    // navigate('/login')
  };

  return (
    <>
      <LoginButton
        fullWidth
        type="submit"
        sx={{ marginTop: errors ? "0px" : "25px" }}
        onClick={submitHandler}
      >
        로그인
      </LoginButton>
      {tabClick !== "company" && (
        <>
          <div style={{ marginTop: "28px" }}>
            <Divider />
            <FlexBox
              justifyContent="center"
              alignItems="center"
              style={{ width: "100%" }}
            >
              <DividerText>또는</DividerText>
            </FlexBox>
          </div>
          <GoogleButton fullWidth style={{}}>
            <GoogleIcon />
            Google 로그인
          </GoogleButton>
          <LinkLayout
            label="아직 회원이 아니신가요?"
            linkLabel="회원가입하기"
            onClick={() => navigate("/sign-up")}
            style={{ marginTop: "27px" }}
          />
        </>
      )}
    </>
  );
};

export default Buttons;
